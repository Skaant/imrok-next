import { ExternalContentsFieldsIndex } from "../../../_types/content/ExternalContent.type";
import ExternalContentTypes, {
  ExternalContentTypesList,
} from "../../../_types/content/ExternalContentTypes.type";

/**
 * Creates and fill the `frontmatter {}` field props.
 *
 * Given, or all, types' properties are aggregated,
 *  made unique and sorted.
 */
function fieldsBuilder({
  types,
}: {
  types?: ExternalContentTypes | ExternalContentTypes[];
} = {}) {
  return `frontmatter {
          ${(types
            ? Array.isArray(types)
              ? types
              : [types]
            : ExternalContentTypesList
          )
            .reduce<ExternalContentTypes[]>((acc, type) => {
              return [
                ...acc,
                ...(
                  (ExternalContentsFieldsIndex[type] ||
                    []) as ExternalContentTypes[]
                ).filter((prop) => !acc.includes(prop)),
              ];
            }, [])
            .sort((a, b) => a.localeCompare(b))
            .join("\n          ")}
        }`;
}

export default fieldsBuilder;
