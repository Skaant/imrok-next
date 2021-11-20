/**
 * This is a workaround to get `graphql` objet type.
 *
 * Signature extracted from `gatsby@^4.2.0:CreatePagesArgs.graphql`.
 */
type Graphql = <TData, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<{
  errors?: any;
  data?: TData;
}>;

export default Graphql;
