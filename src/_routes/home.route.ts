import RouteFactory from "../_types/routes/RouteFactory.type";
import getContents from "../_queries/getContents/getContents.query";
import GET_CONTENT_SORTS from "../_queries/getContents/_enums/getContentSorts.enum";
import homePageContextFactory from "./home.page";

const homeRouteFactory: RouteFactory = async (path, createPage, graphql) => {
  const news = await getContents(graphql, {
    sort: { [GET_CONTENT_SORTS.UPDATED_AT]: "DESC" },
  });
  createPage({
    path,
    component: require.resolve("../_templates/default.template.tsx"),
    context: homePageContextFactory({ news }),
  });
};

export default homeRouteFactory;
