import CONTENT_TYPES from "../../../../_enums/content-types.enum";

type ImageContent = {
  type: CONTENT_TYPES.IMAGE;
  url: string;
  alt: string;
  legend?: string;
};

export default ImageContent;
