import { GetContentsFilters, GetContentsTypes } from "../getContents.query";
import GET_CONTENT_FILTERS from "../_enums/getContentFilters.enum";

const FILTERS_RESOLVERS = {
  [GET_CONTENT_FILTERS.PATH]: (path: string) =>
    `fileAbsolutePath: { regex: "/_data/${path}/" }`,
};

function typesFilterResolver(types: GetContentsTypes) {
  return `type: { ${
    Array.isArray(types) ? `in: ["${types.join('", "')}"]` : `eq: "${types}"`
  } }`;
}

function argsBuilder({
  types,
  filters,
}: {
  types?: GetContentsTypes;
  filters?: GetContentsFilters;
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

  return types || filters
    ? `(filter: { ${
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
      } })`
    : "";
}

export default argsBuilder;
