import { CreatePagesArgs } from "gatsby";
import homeRouteFactory from "./src/_routes/home.route";
import categoriesRouteFactory from "./src/_routes/categories.route";

export default {
  createPages: async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage } = actions;

    await homeRouteFactory("/", createPage, graphql);
    await categoriesRouteFactory("/", createPage, graphql);
  },
};
