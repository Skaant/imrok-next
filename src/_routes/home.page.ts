import COLORS from "../_enums/colors.enum";
import CONTENT_TYPES from "../_enums/content-types.enum";
import { DefaultTemplateContext } from "../_templates/default.template";
import ExternalContent from "../_types/content/ExternalContent.type";
import ImageContent from "../_types/content/_externalContents/ImageContent.type";
import LinksListContent from "../_types/content/_internalContents/LinksListContent.type";
import Page from "../_types/routes/Page.type";

const homePage: Page = ({ news }: { news: ExternalContent[] }) =>
  ({
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
  } as DefaultTemplateContext);

export default homePage;
