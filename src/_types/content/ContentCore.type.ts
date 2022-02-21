import CONTENT_TYPES from "../../_enums/content-types.enum";

type ContentCore = {
  type: CONTENT_TYPES;
};

export default ContentCore;

/** Used to generate `ExternalContent` queries. */
export const ContentCoreFields = ["type"];
