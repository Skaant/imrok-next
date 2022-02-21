import { CreatePagesArgs } from "gatsby";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ExternalContentCore from "../../_types/content/ExternalContentCore.type";
import NodeItemCore from "../../_types/queries/NodeItemCore.model";

/**
 * Genericly typed content query.
 */
async function getContents<ContentType extends ExternalContentCore>(
  graphql: CreatePagesArgs["graphql"],
  /** Starts at `query { allMdx() { nodes {`. */
  format: string,
  params?: string
): Promise<ContentType[]> {
  const result = await graphql(`
    query {
      allMdx${
        params
          ? `(
        ${params}
      )`
          : ""
      } {
        nodes {
          ${format}
        }
      }
    }`);
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

export default getContents;
