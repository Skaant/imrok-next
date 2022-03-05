import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import ImageContent from "../../_types/content/_externalContents/ImageContent.type";
import RouteFactory from "../../_types/routes/RouteFactory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";
import Row from "../../_types/layout/Row.type";

const category = CATEGORIES.illustrations;
const { id, title } = CATEGORIES_DATA[category];

const illustrationsRouteFactory: RouteFactory = async (path, createPage) => {
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
            },
          },
        } as Row<undefined, ImageContent>,
      ],
    } as DefaultTemplateContext,
  });
};

export default illustrationsRouteFactory;
