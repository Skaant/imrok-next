import { Actions } from "gatsby";

export type RouteFactory<DataType = void> = (
  path: string,
  createPage: Actions["createPage"],
  data?: DataType
) => void;

export type Route<ContextType> = {
  slug: string;
  component: string;
  context: ContextType;
};
