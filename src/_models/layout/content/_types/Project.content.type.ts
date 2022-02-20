import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ExternalContentCore from "../ExternalContent.core.type";
import Content from "../Content.type";

/** Used to query sub-contents. */
export type ContentRef = {
  /** Used for template provisioning. */
  key: string;
  _id: string;
};

type ProjectContent = ExternalContentCore & {
  type: CONTENT_TYPES.PROJECT;
  slug: string;
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
