import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import LinksListContent from "../../_types/content/_internalContents/LinksListContent.type";
import Row from "../../_types/layout/Row.type";
import RouteFactory from "../../_types/routes/RouteFactory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";
import COLORS from "../../_enums/colors.enum";
import projectRouteFactory from "../project/project.route";
import getContents from "../../_queries/getContents/getContents.query";
import ProjectContent from "../../_types/content/_externalContents/ProjectContent.type";
import GET_CONTENT_FILTERS from "../../_queries/getContents/_enums/getContentFilters.enum";

const category = CATEGORIES.permaculture;
const { id, title } = CATEGORIES_DATA[category];

const permacultureRouteFactory: RouteFactory = async (
  _path,
  createPage,
  graphql
) => {
  const projects = (await getContents(graphql, {
    types: CONTENT_TYPES.PROJECT,
    filters: { [GET_CONTENT_FILTERS.PATH]: `_projects/${id}` },
  })) as ProjectContent[];
  const path = _path + id;
  await projectRouteFactory(path, createPage, graphql, {
    project: projects[0],
  });
  createPage({
    path,
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: [
        {
          content: {
            id: `${id}-projects`,
            type: CONTENT_TYPES.LINKS_LIST,
            title: "Mes jardins",
            level: 2,
            color: COLORS.dark,
            links: projects.map(({ slug, title }) => ({
              url: `${path}/${slug}`,
              label: title,
            })),
          } as LinksListContent & Row,
        },
      ],
    } as DefaultTemplateContext,
  });
};

export default permacultureRouteFactory;
