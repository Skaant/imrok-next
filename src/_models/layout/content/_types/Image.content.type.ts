import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ExternalContentCore from "../ExternalContent.core.type";

type ImageContent = ExternalContentCore & {
  type: CONTENT_TYPES.IMAGE;
  url: string;
  alt: string;
  legend?: string;
};

export default ImageContent;
