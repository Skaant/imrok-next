import { Actions } from "gatsby";
import { Route } from "../../_models/route/route.type";

function createRoute<ContextType, DataType = { [key: string]: any }>(
  path: string,
  { slug, component, context }: Route<ContextType>,
  createPage: Actions["createPage"],
  /** Data re-used from parent. */
  data?: DataType
) {
  createPage({
    path: path + "/" + slug,
    component: require.resolve(component),
    context: {
      ...context,
      ...data,
    },
  });
}

export default createRoute;
