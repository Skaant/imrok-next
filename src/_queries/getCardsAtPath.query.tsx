import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import BaseNode from "../_models/nodeTypes/base-node.model";

/**
 * @param path **MUST NOT** START & FINISH WITH A DASH
 */
async function getCardsAtPathQuery(
  graphql: Graphql,
  path: string,
  options: string[] = []
): Promise<BaseNode[]> {
  const result = await graphql(`
    query {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/${path}/"}}
        ${options.join("\n")}
      ) {
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
  `);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (result.data as DataAllMdx).allMdx.nodes as BaseNode[];
}

export default getCardsAtPathQuery;
