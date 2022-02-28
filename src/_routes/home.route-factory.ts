import COLORS from "../_enums/colors.enum";
import CONTENT_TYPES from "../_enums/content-types.enum";
import ImageContent from "../_types/content/_externalContents/ImageContent.type";
import { DefaultTemplateContext } from "../_templates/default.template";
import RouteFactory from "../_types/routes/RouteFactory.type";
import getContents from "../_queries/getContents/getContents.query";
import GET_CONTENT_SORTS from "../_queries/getContents/_enums/getContentSorts.enum";
import LinksListContent from "../_types/content/_internalContents/LinksListContent.type";

const homeRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  const news = await getContents(graphql, {
    sort: { [GET_CONTENT_SORTS.UPDATED_AT]: "DESC" },
  });
  createPage({
    path,
    component: require.resolve("../_templates/default.template.tsx"),
    context: {
      title: "Le site créatif de Romaric Ruga",
      rows: [
        {
          card: {
            title: "Pensée du moment",
            level: 2,
            content: "L'imagination est la voie !",
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
          type: CONTENT_TYPES.LINKS_LIST,
          id: "global-news",
          title: "Activités récentes",
          links: news
            .filter(({ slug }) => slug)
            .map(({ slug, title, type, category, updatedAt, tags }) => ({
              url: `${category ? `/${category}` : `/${type}`}/${slug}`,
              label: title,
              date: updatedAt,
              category,
              tags,
              type,
            })),
        } as LinksListContent,
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
