import COLORS from "../_enums/colors.enum";
import CONTENT_TYPES from "../_enums/content-types.enum";
import ImageContent from "../_types/content/_externalContents/ImageContent.type";
import RouteFactory from "../_types/routes/route-factory.type";
import { DefaultTemplateContext } from "../_templates/default.template";

const homeRouteFactory: RouteFactory = async (path, createPage) => {
  createPage({
    path,
    component: require.resolve("../_templates/default.template.tsx"),
    context: {
      title: "Le site créatif de Romaric Ruga",
      rows: [
        {
          card: {
            title: "Pensées du moment",
            level: 2,
            content: "Mmmmh",
            col: "md",
          },
        },
        {
          background: COLORS.light,
          card: {
            level: 2,
            col: "sm",
            background: COLORS.light,
            title: "HIGHBS-BOK",
            content: "Stylé",
            className: "pt-12 pb-12",
          },
        },
        {
          level: 2,
          title: "Éditorial",
          content: "Qui suis-je ? Qu'est-ce qu'on trouve sur ce site ?",
        },
        {
          level: 2,
          title: "Mots-clés les plus courants",
          content: "Liste",
        },
        {
          content: {
            type: CONTENT_TYPES.IMAGE,
            url: "https://medias.imrok.fr/seigneur-de-l-infini.png",
          } as ImageContent,
        },
      ],
    } as DefaultTemplateContext,
  });
};

export default homeRouteFactory;
