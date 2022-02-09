import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import NodeItemCore from "../_models/nodes/node-item-core.model";

/**
 * Genericly typed content query.
 */
async function getContent<
  ContentType extends {
    body: string;
  } /* & Omit<ContentType, "body"> */
>(
  graphql: Graphql,
  params: string,
  /** Starts at `query { allMdx() { nodes {`. */
  query: string
): Promise<ContentType[]> {
  const result = await graphql(`
    query {
      allMdx(
        ${params}
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
  return (
    result.data as DataAllMdx<NodeItemCore<Omit<ContentType, "body">>>
  ).allMdx.nodes.map(({ frontmatter, body }) => ({
    ...frontmatter,
    body,
  })) as ContentType[];
}

export default getContent;
