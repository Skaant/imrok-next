import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ExternalContentCore from "../ExternalContentCore.type";

type TextContent = ExternalContentCore & {
  type: CONTENT_TYPES.TEXT;
};

export default TextContent;
