import { CreatePagesArgs } from "gatsby";
import ProjectContent from "../../_models/layout/content/_types/Project.content.type";
import getContents from "../getContents/getContents.query";

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
  graphql: CreatePagesArgs["graphql"],
  filters?: {
    [PROJECTS_FILTERS.PATH]?: string;
  }
): Promise<ProjectContent[]> {
  return getContents<ProjectContent>(
    graphql,
    `frontmatter {
            _id
            category
            slug
            title
            refs {
              key
              _id
            }
          }
          body`,
    filters
      ? `filter: {
        ${Object.entries(filters).map(([key, value]) => FILTERS[key](value))}
      }`
      : ""
  );
}

export default getProjects;
