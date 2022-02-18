import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ContentCore from "../Content.core.type";

type VideoContent = ContentCore & {
  type: CONTENT_TYPES.VIDEO;
  id: string;
  title: string;
};

export default VideoContent;
