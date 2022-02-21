import CONTENT_TYPES from "../../_enums/content-types.enum";

type ExternalContentTypes =
  | CONTENT_TYPES.TEXT
  | CONTENT_TYPES.IMAGE
  | CONTENT_TYPES.VIDEO
  | CONTENT_TYPES.PROJECT;

export default ExternalContentTypes;

export const ExternalContentTypesList = [
  CONTENT_TYPES.TEXT,
  CONTENT_TYPES.IMAGE,
  CONTENT_TYPES.VIDEO,
  CONTENT_TYPES.PROJECT,
];
