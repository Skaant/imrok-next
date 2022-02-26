import { CreatePagesArgs } from "gatsby";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ExternalContent from "../../_types/content/ExternalContent.type";
import ExternalContentTypes from "../../_types/content/ExternalContentTypes.type";
import Row from "../../_types/layout/Row.type";
import NodeItemCore from "../../_types/queries/NodeItemCore.model";
import GET_CONTENT_FILTERS from "./_enums/getContentFilters.enum";
import argsBuilder from "./_helpers/argsBuilder.helper";
import fieldsBuilder from "./_helpers/fieldsBuilder.helper";

export type GetContentsTypes =
  | ExternalContentTypes
  | ExternalContentTypes[]
  | Row<ExternalContentTypes>
  | Row<ExternalContentTypes>[];

export type GetContentsFilters = { [key in GET_CONTENT_FILTERS]?: string };

/**
 * Genericly typed content query.
 */
async function getContents(
  graphql: CreatePagesArgs["graphql"],
  {
    types,
    filters,
  }: {
    types?: GetContentsTypes;
    filters?: GetContentsFilters;
  } = {},
  /** Add `Row` type props to query & results. */
  rows?: true
): Promise<ExternalContent[]> {
  console.log(`
    query {
      allMdx${argsBuilder({ types, filters })} {
        nodes {
          ${fieldsBuilder({ types }, rows)}
          body
        }
      }
    }`);
  const result = await graphql(`
    query {
      allMdx${argsBuilder({ types, filters })} {
        nodes {
          ${fieldsBuilder({ types }, rows)}
          body
        }
      }
    }`);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (
    result.data as DataAllMdx<NodeItemCore<Omit<ExternalContent, "body">>>
  ).allMdx.nodes.map(({ frontmatter, body }) => ({
    ...frontmatter,
    body,
  })) as ExternalContent[];
}

export default getContents;
