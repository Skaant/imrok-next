import Graphql from "../_helpers/models/graphql.model";

type DataAllMdxDistinct = {
  allMdx: {
    distinct: string[];
  };
};

/**
 * @param path **MUST NOT** START & FINISH WITH A DASH
 */
async function getTagsQuery(graphql: Graphql): Promise<string[]> {
  const result = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `);
  if (result.errors) {
    throw new Error(result.errors);
  }
  return (result.data as DataAllMdxDistinct).allMdx.distinct;
}

export default getTagsQuery;
