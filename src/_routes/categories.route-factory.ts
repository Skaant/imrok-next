import RouteFactory from "../_models/routes/route-factory.type";
import illustrationsRouteFactory from "./_categories/illustrations.route-factory";
import penseesRouteFactory from "./_categories/pensees.route-factory";

// export type CategoriesData = {}

const categoriesRouteFactory: RouteFactory = async (
  path,
  createPage,
  graphql
) => {
  await penseesRouteFactory(path, createPage, graphql);
  await illustrationsRouteFactory(path, createPage);
};

export default categoriesRouteFactory;
