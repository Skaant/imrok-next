import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import VideoContent from "../../_models/layout/content/_types/Video.content.type";
import RouteFactory from "../../_models/routes/route-factory.type";
import getContent from "../../_queries/getContent/getContent.query";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.pensees;
const { id, title } = CATEGORIES_DATA[category];

const penseesRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  const videos = await getContent<VideoContent>(
    graphql,
    `
      filter: {
        frontmatter: {
          type: { eq: "video" },
        },
      }
    `,
    `
      frontmatter {
        id
        type
        title
        tags
      }
      body
    `
  );
  createPage({
    path: (path += id),
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: videos.map((content) => ({
        card: {
          content,
        },
      })),
    } as DefaultTemplateContext,
  });
};

export default penseesRouteFactory;
