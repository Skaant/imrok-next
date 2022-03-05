import RouteFactory from "../_types/routes/RouteFactory.type";
import anecdotesRouteFactory from "./_categories/anecdotes.route";
import bibliothequeRouteFactory from "./_categories/bibliotheque.route";
import illustrationsRouteFactory from "./_categories/illustrations.route";
import penseesRouteFactory from "./_categories/pensees.route";
import permacultureRouteFactory from "./_categories/permaculture.route";

// export type CategoriesData = {}

const categoriesRouteFactory: RouteFactory = async (
  path,
  createPage,
  graphql
) => {
  await penseesRouteFactory(path, createPage, graphql);
  await illustrationsRouteFactory(path, createPage);
  await permacultureRouteFactory(path, createPage, graphql);
  await anecdotesRouteFactory(path, createPage, graphql);
  await bibliothequeRouteFactory(path, createPage, graphql);
};

export default categoriesRouteFactory;
