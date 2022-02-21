import CONTENT_TYPES from "../../_enums/content-types.enum";
import ImageContent, {
  ImageContentFields,
} from "./_externalContents/ImageContent.type";
import ProjectContent, {
  ProjectContentFields,
} from "./_externalContents/ProjectContent.type";
import VideoContent, {
  VideoContentFields,
} from "./_externalContents/VideoContent.type";

/** Queried content */
type ExternalContent = ImageContent | VideoContent | ProjectContent;

export default ExternalContent;

export const ExternalContentsFieldsIndex = {
  [CONTENT_TYPES.IMAGE]: ImageContentFields,
  [CONTENT_TYPES.VIDEO]: VideoContentFields,
  [CONTENT_TYPES.PROJECT]: ProjectContentFields,
};
