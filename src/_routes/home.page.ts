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
import { HEADER_DISPLAYS } from "../_components/ExternalContentLayout/ExternalContentLayoutHeader";
import CATEGORIES from "../_enums/categories.enum";

const homePageContextFactory: PageContextFactory<HomeTemplateContext> = async (
  _,
  graphql
) => {
  const [highlight, introduction, highbsBokCta] = await Promise.all(
    [
      "text_l-imagination-est-la-voie",
      "text_home-introduction",
      "text_home-highbs-bok-cta",
    ].map(
      async (id) =>
        (
          await getContents(graphql, {
            filters: { [GET_CONTENT_FILTERS._ID]: id },
          })
        )[0]
    )
  );
  const news = await getContents(graphql, {
    filters: { [GET_CONTENT_FILTERS.CATEGORY]: [null, CATEGORIES.pensees] },
    sort: { [GET_CONTENT_SORTS.UPDATED_AT]: "DESC" },
  });
  return {
    title: "IMROK",
    subtitle: "Le hub créatif de Romaric Ruga",
    rows: [
      {
        title: "Pensée du moment",
        level: 2,
        col: "md",
        color: COLORS.light,
        card: {
          content: {
            ...highlight.content,
            display: 2,
          },
          col: "md",
        },
        className: "mb-24 mb-md-32",
      } as Row<undefined, Content>,
      {
        level: 2,
        title: introduction.content.title,
        content: introduction.content,
        col: "lg",
        background: COLORS.light,
        displays: {
          [HEADER_DISPLAYS.TITLE]: false,
        },
      },
      {
        background: COLORS.light,
        card: {
          level: 2,
          col: "md",
          background: COLORS.highbs,
          title: highbsBokCta.content.title,
          content: highbsBokCta.content,
          className: "pt-12 pb-12",
          displays: {
            [HEADER_DISPLAYS.TITLE]: false,
          },
        },
        className: "mb-24 mb-md-32",
      },
      {
        level: 2,
        id: "global-news",
        title: "Activités récentes",
        color: COLORS.light,
        col: "lg",
        content: {
          type: CONTENT_TYPES.LINKS_LIST,
          color: COLORS.lightO90,
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
