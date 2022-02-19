import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import RouteFactory from "../../_models/routes/route-factory.type";
import getProjects, {
  PROJECTS_FILTERS,
} from "../../_queries/getProjects/getProjects.query";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.permaculture;
const { id, title } = CATEGORIES_DATA[category];

const permacultureRouteFactory: RouteFactory = async (
  path,
  createPage,
  graphql
) => {
  const projects = await getProjects(graphql, {
    [PROJECTS_FILTERS.PATH]: `_projects/${id}`,
  });
  console.log("projects", projects);
  createPage({
    path: path + id,
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: [
        {
          content: projects
            .map((project) => JSON.stringify(project))
            .join("\n"),
        },
      ],
    } as DefaultTemplateContext,
  });
};

export default permacultureRouteFactory;
