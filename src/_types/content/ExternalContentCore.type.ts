import ContentCore, { ContentCoreFields } from "./ContentCore.type";
import ExternalContentTypes from "./ExternalContentTypes.type";

/**
 * Dynamic content, queried from
 *  `_data` folder through GraphQL.
 */
type ExternalContentCore = ContentCore & {
  _id: string;
  type: ExternalContentTypes;
  /**
   * This particular field will be extracted from
   *  the MDX part of the file, while all others
   *  properties will be extracted from
   *  the frontammer YAML.
   */
  body?: string;
};

export default ExternalContentCore;

/**
 * Used to generate `ExternalContent` queries.
 *
 * To be more specific, it'll build the `frontmatter`
 *  object, thus `body` is ignored here.
 */
export const ExternalContentCoreFields = [...ContentCoreFields, "_id"];
