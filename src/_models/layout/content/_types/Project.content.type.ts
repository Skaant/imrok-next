import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ContentCore from "../Content.core.type";
import Content from "../Content.type";

/** Used to query sub-contents. */
type ContentRef = {
  /** Used for template provisioning. */
  key: string;
  /** Starts in `/_data/`. */
  path: string;
};

type ProjectContent = ContentCore & {
  type: CONTENT_TYPES.PROJECT;
  id: string;
  title: string;
  /**
   * `refs` hold others contents links, which will be
   *  queried to provision `contents` prop.
   */
  refs?: ContentRef[];
  /**
   * `contents` is provisioned from `refs` by
   *  specific queries like `getProjects`.
   *
   * If not processed through these methods,
   *  `contents` will be left `undefined`.
   */
  contents?: Content[];
};

export default ProjectContent;
