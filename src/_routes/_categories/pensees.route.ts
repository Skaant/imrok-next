import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import COLORS from "../../_enums/colors.enum";
import RouteFactory from "../../_types/routes/RouteFactory.type";
import getContents from "../../_queries/getContents/getContents.query";
import { DefaultTemplateContext } from "../../_templates/default.template";
import CONTENT_TYPES from "../../_enums/content-types.enum";

const category = CATEGORIES.pensees;
const { id, title } = CATEGORIES_DATA[category];

const penseesRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  const videos = await getContents(graphql, {
    types: CONTENT_TYPES.VIDEO,
  });
  createPage({
    path: (path += id),
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: videos.map((content) => ({
        card: {
          col: "md",
          background: COLORS.psik,
          color: COLORS.dark,
          content,
          level: 2,
        },
      })),
    } as DefaultTemplateContext,
  });
};

export default penseesRouteFactory;
