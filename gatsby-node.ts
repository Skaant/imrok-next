import { CreatePagesArgs } from "gatsby";
import SpecialCard from "./src/_models/special-card.model";
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
        cards: [
          introCards[0],
          {
            type: "call_to_action",
            id: "call_to_action--highbs-bok",
            title: "Les préventes de mon livre l'HIGHBS-BOK sont ouverte",
            description:
              "Vous n'avez que jusqu'au 26 Décembre pour vous procurez-vous un exemplaire de ce formidable ouvrage, accompané de supers stickers spécialement créés pour l'occasion.",
            props: {
              url: "https://fr.ulule.com/highbs-bok-volume-1/",
            },
          } as SpecialCard,
          introCards[1],
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
              "Voici une liste exhaustive de tous les mots-clés du site.",
            props: {
              tags,
            },
          } as SpecialCard,
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
