import { CreatePagesArgs } from "gatsby";
import getCardsAtPathQuery from "./src/_queries/getCardsAtPath.query";

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
      component: require.resolve("./src/_templates/home.template.tsx"),
      context: {
        cards: introCards,
      },
    });
  },
};
