import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import RouteFactory from "../../_models/routes/route-factory.type";
import LinksListContent from "../../_models/layout/content/_types/LinksList.content.type";
import getProjects, {
  PROJECTS_FILTERS,
} from "../../_queries/getProjects/getProjects.query";
import { DefaultTemplateContext } from "../../_templates/default.template";
import Row from "../../_models/layout/Row.type";
import COLORS from "../../_enums/colors.enum";

const category = CATEGORIES.permaculture;
const { id, title } = CATEGORIES_DATA[category];

const permacultureRouteFactory: RouteFactory = async (
  _path,
  createPage,
  graphql
) => {
  const projects = await getProjects(graphql, {
    [PROJECTS_FILTERS.PATH]: `_projects/${id}`,
  });
  const path = _path + id;
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
