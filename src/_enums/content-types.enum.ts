/**
 * @note Types `string` & `ReactElement` are implicity included.
 */
enum CONTENT_TYPES {
  /** External */
  TEXT = "text",
  /** External */
  IMAGE = "image",
  /** @todo External */
  GALLERY = "gallery",
  /** External */
  VIDEO = "video",
  /** External */
  PROJECT = "project",
  /**
   * PROJECT sub-types
   */
  /** @todo External */
  ARTICLE = "article",
  /** @todo External */
  BOOK = "book",

  /** Internal */
  LINKS_LIST = "links-list",
  /** Internal */
  CTA = "cta",
  /** Internal */
  TAGS_LIST = "tags-list",
}

export default CONTENT_TYPES;
