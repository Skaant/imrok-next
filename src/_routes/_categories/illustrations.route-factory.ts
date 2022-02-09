import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import ImageContent from "../../_models/layout/content/_types/Image.content.type";
import RouteFactory from "../../_models/routes/route-factory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.illustrations;
const { id, title } = CATEGORIES_DATA[category];

const illustrationsRouteFactory: RouteFactory = (path, createPage) => {
  createPage({
    path: path + id,
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: [
        {
          card: {
            col: "md",
            content: {
              type: CONTENT_TYPES.IMAGE,
              url: "https://medias.imrok.fr/seigneur-de-l-infini.png",
              alt: "Croquis simple d'un seigneur de l'infini en posture de méditation",
            } as ImageContent,
          },
        },
      ],
    } as DefaultTemplateContext,
  });
};

export default illustrationsRouteFactory;