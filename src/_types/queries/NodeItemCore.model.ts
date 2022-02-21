/**
 * `NodeItemCore` is the generic type of GraphQL MDX items.
 *
 * `FrontmatterType` is made of a `Content` type
 *  (restricted to subtypes extending `ContentCore`)
 *  with its `ContentCore`'s properties split a
 *  level higher, as exposed by GraphQL.
 */
type NodeItemCore<FrontmatterType = object> = {
  /**
   * Content metada.
   *
   * Made of a `ContentCore`-extending type,
   *  without `ContentCore` properties
   *  (currently, only `body`).
   */
  frontmatter: FrontmatterType;
  /**
   * @note Optional because nothing in queries
   * currently ensure that `body` property is
   * present in given `query`.
   */
  body?: string;
};

export default NodeItemCore;
