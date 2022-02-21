import ImageContent from "./_externalContents/ImageContent.type";
import ProjectContent from "./_externalContents/ProjectContent.type";
import VideoContent from "./_externalContents/VideoContent.type";

/** Queried content */
type ExternalContent = ImageContent | VideoContent | ProjectContent;

export default ExternalContent;
