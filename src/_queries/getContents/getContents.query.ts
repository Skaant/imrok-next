import { CreatePagesArgs } from "gatsby";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ExternalContent from "../../_types/content/ExternalContent.type";
import ExternalContentTypes from "../../_types/content/ExternalContentTypes.type";
import Row from "../../_types/layout/Row.type";
import Section from "../../_types/layout/Section.type";
import NodeItemCore from "../../_types/queries/NodeItemCore.model";
import GET_CONTENT_FILTERS from "./_enums/getContentFilters.enum";
import GET_CONTENT_SORTS from "./_enums/getContentSorts.enum";
import argsBuilder from "./_helpers/argsBuilder.helper";
import fieldsBuilder from "./_helpers/fieldsBuilder.helper";

export type GetContentsTypes = ExternalContentTypes | ExternalContentTypes[];

export type GetContentsFilters = { [key in GET_CONTENT_FILTERS]?: any };

export type SortOrder = "ASC" | "DESC";
export type GetContentsSorts = { [GET_CONTENT_SORTS.UPDATED_AT]: SortOrder };

/**
 * Either row & card can have empty `content: ExternalContent` prop.
 *
 * They can't have both, and `card` will be rendered in place
 *  of row content if it exists.
 *
 * @see SectionContent (less specific : `Content | undefined`)
 */
type ExternalSectionContent = ExternalContent | undefined;
/** Important to bind the `ExternalSectionContent` type to row. */
type getContentsRow = Row<ExternalSectionContent, ExternalSectionContent>;

/**
 * Genericly typed content query.
 */
async function getContents(
  graphql: CreatePagesArgs["graphql"],
  {
    types,
    filters,
    sort,
  }: {
    types?: GetContentsTypes;
    filters?: GetContentsFilters;
    sort?: GetContentsSorts;
  } = {},
  /** Add `Row` type props to query & results. */
  rows?: true
): Promise<getContentsRow[]> {
  const query = `
    query {
      allMdx${argsBuilder({ types, filters, sort })} {
        nodes {
          ${fieldsBuilder({ types }, rows)}
          body
        }
      }
    }`;
  console.log(query);
  const result = await graphql(query);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (
    result.data as DataAllMdx<
      NodeItemCore<
        Omit<ExternalContent, "body"> & {
          row: Section | undefined;
          card: Section | undefined;
        }
      >
    >
  ).allMdx.nodes.map(
    ({ frontmatter: { row, card, ...frontmatter }, body }) => ({
      ...row,
      ...(card
        ? {
            card: {
              ...card,
              content: frontmatter,
            },
          }
        : { content: frontmatter }),
      body,
    })
  ) as getContentsRow[];
}

export default getContents;
