import { ExternalContentsFieldsIndex } from "../../../_types/content/ExternalContent.type";
import ExternalContentTypes, {
  ExternalContentTypesList,
} from "../../../_types/content/ExternalContentTypes.type";
import { RowFields } from "../../../_types/layout/Row.type";
import { GetContentsTypes } from "../getContents.query";

/**
 * Creates and fill the `frontmatter {}` field props.
 *
 * Given, or all, types' properties are aggregated,
 *  made unique and sorted.
 */
function fieldsBuilder(
  {
    types,
  }: {
    types?: GetContentsTypes;
  } = {},
  rows?: true
) {
  return `frontmatter {
            ${(types
              ? Array.isArray(types)
                ? types
                : [types]
              : ExternalContentTypesList
            )
              .reduce<string[]>((acc, type) => {
                return [
                  ...acc,
                  ...(
                    (ExternalContentsFieldsIndex[type] ||
                      []) as ExternalContentTypes[]
                  ).filter((prop) => !acc.includes(prop)),
                ];
              }, (rows ? RowFields : []) as string[])
              .sort((a, b) => a.localeCompare(b))
              .join("\n            ")}
          }`;
}

export default fieldsBuilder;
