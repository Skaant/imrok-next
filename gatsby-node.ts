import { CreatePagesArgs } from "gatsby";
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
    createPage({
      path: "/",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        cards: introCards,
      } as DefaultTemplateContext,
    });
    const tags = await getTagsQuery(graphql);
    // todo tags page
    tags.forEach(async (tag) => {
      const tagCards = await getCardsWithTag(graphql, tag, [
        "sort: {fields: frontmatter___id}",
      ]);
      createPage({
        path: `/tags/${tag}`,
        component: require.resolve("./src/_templates/default.template.tsx"),
        context: {
          title: tag,
          subtitle: "Mot-clé",
          cards: tagCards,
        } as DefaultTemplateContext,
      });
    });
  },
};
