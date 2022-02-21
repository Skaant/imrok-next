import CONTENT_TYPES from "../../../_enums/content-types.enum";
import { FILTERS } from "../getContents.query";

const FILTERS_RESOLVERS = {
  [FILTERS.PATH]: (path: string) =>
    `fileAbsolutePath: { regex: "/_data/${path}/" }`,
};

function typesFilterResolver(types: CONTENT_TYPES | CONTENT_TYPES[]) {
  return `type: { ${
    Array.isArray(types) ? `in: ["${types.join('", "')}"]` : `eq: "${types}"`
  } }`;
}

function argsBuilder({
  types,
  filters,
}: {
  types?: CONTENT_TYPES | CONTENT_TYPES[];
  filters?: { [key in FILTERS]?: string };
}) {
  return types || filters
    ? `(filter: { ${types ? typesFilterResolver(types) : ""}${
        types && filters ? ", " : ""
      }${
        filters
          ? Object.entries(filters).map(([key, value]) =>
              FILTERS_RESOLVERS[key](value)
            )
          : ""
      } })`
    : "";
}

export default argsBuilder;
