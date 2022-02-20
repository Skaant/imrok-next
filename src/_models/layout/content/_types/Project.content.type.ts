import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ExternalContentCore from "../ExternalContent.core.type";
import CATEGORIES from "../../../../_enums/categories.enum";

/** Used to query sub-contents. */
export type ContentRef = {
  /** Used for template provisioning. */
  key: string;
  _id: string;
};

type ProjectContent = ExternalContentCore & {
  type: CONTENT_TYPES.PROJECT;
  /**
   * @note Currently category isn't stored in MDX as
   *  their path is already holding this data.
   *
   * Still we need it into route factories & templates
   *  so the internal object must hold this property.
   */
  category?: CATEGORIES;
  slug: string;
  title: string;
  /**
   * `refs` hold contents links.
   *
   * They'll be queried to provision content through
   *  `getContentsFromRefs` as `ExternalContent[]`.
   */
  refs?: ContentRef[];
};

export default ProjectContent;
