import { CreatePagesArgs } from "gatsby";
import { CallToActionCardProps } from "./src/_components/specialCards/CallToAction";
import { LinksListCardProps } from "./src/_components/specialCards/LinksList";
import { TagsCloudCardProps } from "./src/_components/specialCards/TagsCloud";
import SpecialCardsEnum from "./src/_enums/special-cards.enum";
import getCardsAtPathQuery from "./src/_queries/getCardsAtPath.query";
import getCardsWithTag from "./src/_queries/getCardsWithTag.query";
import getTagsQuery from "./src/_queries/getTags.query";
import { DefaultTemplateContext } from "./src/_templates/default.template";

/* exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const { slug } = node.frontmatter;
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
}; */

export default {
  createPages: async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage } = actions;
    const introCards = await getCardsAtPathQuery(graphql, "_data/cards/intro", [
      "sort: {fields: frontmatter___id}",
    ]);
    const tags = await getTagsQuery(graphql);
    createPage({
      path: "/",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Le site créatif de Romaric Ruga",
        cards: [
          introCards[0],
          {
            type: SpecialCardsEnum.call_to_action,
            id: "ulule-highbs-bok",
            title: "Les préventes de mon livre l'HIGHBS-BOK sont ouvertes",
            description:
              "Vous n'avez que **jusqu'au 26 Décembre** pour **vous procurer un exemplaire** de ce formidable ouvrage, **accompagné de supers stickers** spécialement créés pour l'occasion.",
            url: "https://fr.ulule.com/highbs-bok-volume-1/",
          } as CallToActionCardProps,
          introCards[1],
          {
            type: SpecialCardsEnum.links_list,
            id: "carte-du-site",
            title: "Carte du site",
            description:
              "Ci-dessous, découvrez la liste des grandes catégories du site.",
            links: [
              {
                url: "/pensees-sur-le-futur",
                label: "Pensées sur le futur",
              },
              {
                url: "/pensees-abstraites",
                label: "Pensées abstraites",
              },
              {
                url: "/illustrations-et-art",
                label: "Illustrations et art",
              },
              {
                url: "/anecdotes-de-vie",
                label: "Anecdotes de vie",
              },
              {
                url: "/permaculture-et-jardins",
                label: "Permaculture et jardins",
              },
              {
                url: "/livres-lus-et-extraits",
                label: "Livres lus et extraits",
              },
              {
                url: "/corps-et-energie",
                label: "Corps et énergie",
              },
            ],
          } as LinksListCardProps,
        ],
      } as DefaultTemplateContext,
    });
    const tagsCards = await getCardsAtPathQuery(
      graphql,
      "_data/cards/tags" /* [
      "sort: {fields: frontmatter___id}",
    ] */
    );
    createPage({
      path: "/tags",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Mots-clés",
        cards: [
          tagsCards[0],
          {
            type: "tags_cloud",
            id: "tags_cloud",
            title: "Répertoire des mots-clés",
            description:
              "Voici une liste exhaustive de **tous les mots-clés du site**.",
            tags,
          } as TagsCloudCardProps,
        ],
      } as DefaultTemplateContext,
    });
    tags.forEach(async (tag) => {
      const tagCards = await getCardsWithTag(graphql, tag, [
        "sort: {fields: frontmatter___id}",
      ]);
      createPage({
        path: `/tags/${tag}`,
        component: require.resolve("./src/_templates/default.template.tsx"),
        context: {
          uptitle: "Mot-clé",
          title: tag,
          cards: tagCards,
        } as DefaultTemplateContext,
      });
    });
  },
};
