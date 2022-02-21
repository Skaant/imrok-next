import RouteFactory from "../_types/routes/RouteFactory.type";
import illustrationsRouteFactory from "./_categories/illustrations.route-factory";
import penseesRouteFactory from "./_categories/pensees.route-factory";
import permacultureRouteFactory from "./_categories/permaculture.route-factory";

// export type CategoriesData = {}

const categoriesRouteFactory: RouteFactory = async (
  path,
  createPage,
  graphql
) => {
  await penseesRouteFactory(path, createPage, graphql);
  await illustrationsRouteFactory(path, createPage);
  await permacultureRouteFactory(path, createPage, graphql);
};

export default categoriesRouteFactory;
