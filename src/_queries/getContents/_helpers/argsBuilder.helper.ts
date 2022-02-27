import CATEGORIES from "../../../_enums/categories.enum";
import {
  GetContentsFilters,
  GetContentsSorts,
  GetContentsTypes,
  SortOrder,
} from "../getContents.query";
import GET_CONTENT_FILTERS from "../_enums/getContentFilters.enum";
import GET_CONTENT_SORTS from "../_enums/getContentSorts.enum";

const FILTERS_RESOLVERS: {
  [key in GET_CONTENT_FILTERS]: (...ars: any) => string;
} = {
  [GET_CONTENT_FILTERS.PATH]: (path: string) =>
    `fileAbsolutePath: { regex: "/_data/${path}/" }`,
  [GET_CONTENT_FILTERS.CATEGORY]: (category: CATEGORIES) =>
    `category: { eq: "${category}" }`,
  [GET_CONTENT_FILTERS.TAGS]: (tags: string[]) =>
    `tags: { in: "${tags.join('", ')}" }`,
};

const SORTS_RESOLVERS: {
  [key in GET_CONTENT_SORTS]: (...ars: any) => string;
} = {
  [GET_CONTENT_SORTS.UPDATED_AT]: (order: SortOrder) =>
    `{ fields: frontmatter___date, order: ${order} }`,
};

function typesFilterResolver(types: GetContentsTypes) {
  return `type: { ${
    Array.isArray(types) ? `in: ["${types.join('", "')}"]` : `eq: "${types}"`
  } }`;
}

function argsBuilder({
  types,
  filters,
  sort,
}: {
  types?: GetContentsTypes;
  filters?: GetContentsFilters;
  sort?: GetContentsSorts;
}) {
  const [rootFilters, frontmatterFilters] = Object.entries(
    filters || {}
  ).reduce(
    (_filters, [key, value]) => {
      _filters[
        [GET_CONTENT_FILTERS.PATH].includes(key as GET_CONTENT_FILTERS) ? 0 : 1
      ][key] = value;
      return _filters;
    },
    [{}, {}]
  );

  return types || filters || sort
    ? `(${
        types || filters
          ? `filter: { ${
              rootFilters && Object.keys(rootFilters).length
                ? Object.entries(rootFilters).map(([key, value]) =>
                    FILTERS_RESOLVERS[key](value)
                  )
                : ""
            }${
              Object.keys(rootFilters).length &&
              (types || Object.keys(frontmatterFilters).length)
                ? ", "
                : ""
            }${
              types || Object.keys(frontmatterFilters).length
                ? `frontmatter: { ${types ? typesFilterResolver(types) : ""}${
                    types && Object.keys(frontmatterFilters).length ? ", " : ""
                  }${
                    frontmatterFilters
                      ? Object.entries(frontmatterFilters).map(([key, value]) =>
                          FILTERS_RESOLVERS[key](value)
                        )
                      : ""
                  } }`
                : ""
            } }`
          : ""
      }${(types || filters) && sort ? ", " : ""}${
        sort
          ? `sort: ${SORTS_RESOLVERS[Object.keys(sort)[0]](
              Object.values(sort)[0]
            )}`
          : ""
      })`
    : "";
}

export default argsBuilder;
