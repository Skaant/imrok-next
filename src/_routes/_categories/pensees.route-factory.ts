import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import VideoContent from "../../_models/layout/content/_types/Video.content.type";
import RouteFactory from "../../_models/routes/route-factory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.pensees;
const { id, title } = CATEGORIES_DATA[category];

const penseesRouteFactory: RouteFactory = (path, createPage) => {
  createPage({
    path: (path += id),
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: [
        {
          content: {
            type: CONTENT_TYPES.VIDEO,
            title: "On est pas foutu",
            id: "Q7SoDK3z4Tg",
          } as VideoContent,
        },
      ],
    } as DefaultTemplateContext,
  });
};

export default penseesRouteFactory;
