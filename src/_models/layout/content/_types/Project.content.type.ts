import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ContentCore from "../Content.core.type";

type ProjectContent = ContentCore & {
  type: CONTENT_TYPES.PROJECT;
  id: string;
  title: string;
  contentsRef?: {
    /** Used in template provisioning. */
    key: string;
    /** Starts in `/_data/`. */
    path: string;
  }[];
};

export default ProjectContent;
