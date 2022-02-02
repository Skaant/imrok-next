import { CATEGORIES_DATA } from "../_data/categories.data";
import CATEGORIES from "../_enums/categories.enum";
import RouteFactory from "../_models/routes/route-factory.type";

// export type CategoriesData = {}

const categoriesRouteFactory: RouteFactory = (path, createPage) => {
  Object.values(CATEGORIES).forEach((category) => {
    createPage({
      path: path + "/" + category,
      component: require.resolve("../_templates/default.template.tsx"),
      context: {
        title: CATEGORIES_DATA[category].name,
      },
    });
  });
};

export default categoriesRouteFactory;
