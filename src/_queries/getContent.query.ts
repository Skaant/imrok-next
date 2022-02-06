import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import BaseNode from "../_models/nodes/_types/base-node.model";
import ProjectNode from "../_models/nodes/_types/project-node.model";

/**
 * Genericly typed content query.
 */
async function getContent<ContentType>(
  graphql: Graphql,
  /** Starts at `query { allMdx() { nodes {`. */
  query: string,
  filter: {
    frontmatter?: { [key: string]: any };
  }
): Promise<ContentType[]> {
  const result = await graphql(`
    query {
      allMdx(
        filter: ${JSON.stringify(filter)}
      ) {
        nodes {
          ${query}
        }
      }
    }
  `);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (result.data as DataAllMdx<ContentType>).allMdx.nodes;
}

export default getContent;
