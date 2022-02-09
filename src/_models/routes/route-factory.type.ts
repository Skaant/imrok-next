import { Actions, CreatePagesArgs } from "gatsby";

/**
 * Route factories encapsulate :
 * * Controllers actions (fetching, parsing ...),
 * * Calls to `createPage`,
 * * Calls to sub-`RouteFactory`.
 */
type RouteFactory<DataType = void> = (
  path: string,
  createPage: Actions["createPage"],
  graphql?: CreatePagesArgs["graphql"],
  data?: DataType
) => Promise<void>;

export default RouteFactory;
