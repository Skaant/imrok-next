import RouteFactory from "../_types/routes/RouteFactory.type";
import homePageContextFactory from "./home.page";

const homeRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  createPage({
    path,
    component: require.resolve("../_templates/home.template.tsx"),
    context: await homePageContextFactory(null, graphql),
  });
};

export default homeRouteFactory;
