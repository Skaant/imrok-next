import { CreatePagesArgs } from "gatsby";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ExternalContent from "../../_types/content/Content.type";
import { ContentRef } from "../../_types/content/_externalContents/ProjectContent.type";
import NodeItemCore from "../../_types/queries/node-item-core.model";

/** @todo Should return `Promise<(ContentType & Row)[]>` */
async function getContentsFromProjectRefs(
  graphql: CreatePagesArgs["graphql"],
  refs: ContentRef[]
): Promise<ExternalContent[]> {
  const result = await graphql(`
  query {
    allMdx(
      filter: {
        frontmatter: {
          _id: {
            in: [${refs.map(({ _id }) => `"${_id}"`).join(",")}]
          }
        }
      }
    ) {
      nodes {
        frontmatter {
          _id
          type  
          id
          category
          slug
          title
          refs {
            key
            _id
          }
        }
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

export default getContentsFromProjectRefs;
