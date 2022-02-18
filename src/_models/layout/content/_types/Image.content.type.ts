import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ContentCore from "../Content.core.type";

type ImageContent = ContentCore & {
  type: CONTENT_TYPES.IMAGE;
  url: string;
  alt: string;
  legend?: string;
};

export default ImageContent;
