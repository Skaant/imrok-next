import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import NodeItem from "../_helpers/models/nodeItem.model";

async function getCardsWithTag(
  graphql: Graphql,
  tag: string,
  options: string[] = []
): Promise<NodeItem[]> {
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
  return (result.data as DataAllMdx).allMdx.nodes;
}

export default getCardsWithTag;
