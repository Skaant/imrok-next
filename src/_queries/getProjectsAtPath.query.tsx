import DataAllMdx from "../_helpers/models/dataAllMdx.model";
import Graphql from "../_helpers/models/graphql.model";
import BaseNode from "../_models/nodes/_types/base-node.model";
import ProjectNode from "../_models/nodes/_types/project-node.model";

/**
 * @param path **MUST NOT** START & FINISH WITH A DASH
 */
async function getProjectsAtPathQuery(
  graphql: Graphql,
  path: string,
  options: string[] = []
): Promise<ProjectNode[]> {
  const result = await graphql(`
    query {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/${path}/"}}
        ${options.join("\n")}
      ) {
        nodes {
          id
          frontmatter {
            id
            title
            description
          }
          body
        }
      }
    }
  `);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (result.data as DataAllMdx<ProjectNode>).allMdx.nodes;
}

export default getProjectsAtPathQuery;
