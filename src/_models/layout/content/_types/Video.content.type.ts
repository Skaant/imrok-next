import CONTENT_TYPES from "../../../../_enums/content-types.enum";

type VideoContent = {
  type: CONTENT_TYPES.VIDEO;
  id: string;
  title: string;
  body: string;
};

export default VideoContent;
