import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import NodeItem from "../_helpers/models/nodeItem.model";

/**
 * @param path **MUST NOT** START & FINISH WITH A DASH
 */
async function getCardsAtPathQuery(
  graphql: Graphql,
  path: string
): Promise<NodeItem[]> {
  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/${path}/"}}) {
        nodes {
          id
          frontmatter {
            title
            tags
          }
          body
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(result.errors)
  }
  return (result.data as DataAllMdx).allMdx.nodes;
}

export default getCardsAtPathQuery;
