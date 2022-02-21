import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ExternalContentCore, {
  ExternalContentCoreFields,
} from "../ExternalContentCore.type";

type VideoContent = ExternalContentCore & {
  type: CONTENT_TYPES.VIDEO;
  id: string;
  title: string;
};

export default VideoContent;

/** Used to generate `ExternalContent` queries. */
export const VideoContentFields = [...ExternalContentCoreFields, "id", "title"];
