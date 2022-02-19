import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import COLORS from "../../_enums/colors.enum";
import VideoContent from "../../_models/layout/content/_types/Video.content.type";
import RouteFactory from "../../_models/routes/route-factory.type";
import getContents from "../../_queries/getContents/getContents.query";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.pensees;
const { id, title } = CATEGORIES_DATA[category];

const penseesRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  const videos = await getContents<VideoContent>(
    graphql,
    `frontmatter {
            id
            type
            title
            tags
          }
          body`,
    `filter: {
      frontmatter: {
        type: { eq: "video" },
      },
    }`
  );
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
