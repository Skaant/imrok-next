import ContentCore from "./Content.core.type";

/**
 * Dynamic content, queried from
 *  `_data` folder through GraphQL.
 */
type ExternalContentCore = ContentCore & {
  _id: string;
  /**
   * This particular field will be extracted from
   *  the MDX part of the file, while all others
   *  properties will be extracted from
   *  the frontammer YAML.
   */
  body?: string;
};

export default ExternalContentCore;
