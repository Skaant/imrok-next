import COLORS from "../_enums/colors.enum";
import CONTENT_TYPES from "../_enums/content-types.enum";
import getContents from "../_queries/getContents/getContents.query";
import GET_CONTENT_FILTERS from "../_queries/getContents/_enums/getContentFilters.enum";
import GET_CONTENT_SORTS from "../_queries/getContents/_enums/getContentSorts.enum";
import { HomeTemplateContext } from "../_templates/home.template";
import ImageContent from "../_types/content/_externalContents/ImageContent.type";
import LinksListContent from "../_types/content/_internalContents/LinksListContent.type";
import PageContextFactory from "../_types/routes/PageContextFactory.type";
import Row from "../_types/layout/Row.type";
import Content from "../_types/content/Content.type";

const homePageContextFactory: PageContextFactory<HomeTemplateContext> = async (
  _,
  graphql
) => {
  const highlight = (
    await getContents(graphql, {
      filters: { [GET_CONTENT_FILTERS._ID]: "text_l-imagination-est-la-voie" },
    })
  )[0];
  const news = await getContents(graphql, {
    sort: { [GET_CONTENT_SORTS.UPDATED_AT]: "DESC" },
  });
  return {
    title: "IMROK",
    subtitle: "Le hub créatif de Romaric Ruga",
    rows: [
      {
        title: "Pensée du moment",
        level: 2,
        card: {
          content: highlight.content,
          col: "md",
        },
      } as Row<undefined, Content>,
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
        id: "global-news",
        title: "Activités récentes",
        content: {
          type: CONTENT_TYPES.LINKS_LIST,
          links: news
            .filter(({ content: { slug } }) => slug)
            .map(
              ({
                content: { slug, title, type, category, updatedAt, tags },
              }) => ({
                url: `${category ? `/${category}` : `/${type}`}/${slug}`,
                label: title,
                date: updatedAt,
                category,
                tags,
                type,
              })
            ),
        },
      } as Row<LinksListContent>,
      {
        content: {
          type: CONTENT_TYPES.IMAGE,
          url: "https://medias.imrok.fr/seigneur-de-l-infini.png",
        } as ImageContent,
      },
    ],
  } as HomeTemplateContext;
};

export default homePageContextFactory;
