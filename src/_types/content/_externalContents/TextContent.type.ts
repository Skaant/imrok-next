import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ExternalContentCore, {
  ExternalContentCoreFields,
} from "../ExternalContentCore.type";

type TextContent = ExternalContentCore & {
  type: CONTENT_TYPES.TEXT;
  short?: boolean;
  display?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default TextContent;

/** Used to generate `ExternalContent` queries. */
export const TextContentFields = [
  ...ExternalContentCoreFields,
  "short",
  "display",
];
