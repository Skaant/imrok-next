import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ExternalContentCore, {
  ExternalContentCoreFields,
} from "../ExternalContentCore.type";

type ImageContent = ExternalContentCore & {
  type: CONTENT_TYPES.IMAGE;
  url: string;
  alt: string;
  legend?: string;
};

export default ImageContent;

export const ImageContentFields = [
  ...ExternalContentCoreFields,
  "type",
  "url",
  "alt",
  "legend",
];
