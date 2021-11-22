import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import CardNode from "../_helpers/models/nodeTypes/card-node.model";

/**
 * @param path **MUST NOT** START & FINISH WITH A DASH
 */
async function getCardsAtPathQuery(
  graphql: Graphql,
  path: string,
  options: string[] = []
): Promise<CardNode[]> {
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
  return (result.data as DataAllMdx).allMdx.nodes as CardNode[];
}

export default getCardsAtPathQuery;
