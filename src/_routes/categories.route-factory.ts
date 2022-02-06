import RouteFactory from "../_models/routes/route-factory.type";
import illustrationsRouteFactory from "./_categories/illustrations.route-factory";
import penseesRouteFactory from "./_categories/pensees.route-factory";

// export type CategoriesData = {}

const categoriesRouteFactory: RouteFactory = (path, createPage) => {
  penseesRouteFactory(path, createPage);
  illustrationsRouteFactory(path, createPage);
};

export default categoriesRouteFactory;
