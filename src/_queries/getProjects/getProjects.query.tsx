import Graphql from "../../_helpers/models/graphql.model";
import ProjectContent from "../../_models/layout/content/_types/Project.content.type";
import getContents from "../getContent/getContents.query";

export enum PROJECTS_FILTERS {
  /**
   * Starts in `/_data/` folder, thus
   *  **given `path` should not start with a dash**.
   */
  PATH = "path",
}

const FILTERS = {
  [PROJECTS_FILTERS.PATH]: (path: string) =>
    `fileAbsolutePath: {regex: "/${path}/"}`,
};

async function getProjects(
  graphql: Graphql,
  filters?: {
    [PROJECTS_FILTERS.PATH]?: string;
  }
): Promise<ProjectContent[]> {
  return getContents<ProjectContent>(
    graphql,
    filters
      ? `(
      filter: {
        ${Object.entries(filters).map(([key, value]) => FILTERS[key](value))}
      }
    )`
      : "",
    `frontmatter {
            id
            title
            refs
          }
          body`
  );
}

export default getProjects;
