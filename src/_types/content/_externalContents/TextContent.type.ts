import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ExternalContentCore, {
  ExternalContentCoreFields,
} from "../ExternalContentCore.type";

type TextContent = ExternalContentCore & {
  type: CONTENT_TYPES.TEXT;
  short?: boolean;
};

export default TextContent;

/** Used to generate `ExternalContent` queries. */
export const TextContentFields = [...ExternalContentCoreFields, "short"];
