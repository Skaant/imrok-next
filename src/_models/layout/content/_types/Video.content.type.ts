import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ExternalContentCore from "../ExternalContent.core.type";

type VideoContent = ExternalContentCore & {
  type: CONTENT_TYPES.VIDEO;
  id: string;
  title: string;
};

export default VideoContent;
