import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import CardNode from "../_models/nodeTypes/card-node.model";

async function getCardsWithTag(
  graphql: Graphql,
  tag: string,
  options: string[] = []
): Promise<CardNode[]> {
  const result = await graphql(`
    query {
      allMdx(
        filter: {frontmatter: {tags: {eq: "${tag}"}}}
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

export default getCardsWithTag;
