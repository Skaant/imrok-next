import { CreatePagesArgs } from "gatsby";
import homeRouteFactory from "./src/_routes/home.route-factory";
import categoriesRouteFactory from "./src/_routes/categories.route-factory";

export default {
  createPages: async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage } = actions;

    homeRouteFactory("/", createPage);
    categoriesRouteFactory("/", createPage);
  },
};
