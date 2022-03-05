import { CATEGORIES_DATA } from "../../_data/categories.data";
import CATEGORIES from "../../_enums/categories.enum";
import RouteFactory from "../../_types/routes/RouteFactory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";

const category = CATEGORIES.anecdotes;
const { id, title } = CATEGORIES_DATA[category];

const anecdotesRouteFactory: RouteFactory = async (path, createPage) => {
  createPage({
    path: path + id,
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: [],
    } as DefaultTemplateContext,
  });
};

export default anecdotesRouteFactory;
