enum GET_CONTENT_FILTERS {
  _ID = "_id",
  /**
   * Starts in `/_data/` folder, thus
   *  **given `path` should not start with a dash**.
   */
  PATH = "path",
  CATEGORY = "category",
  TAGS = "tags",
}

export default GET_CONTENT_FILTERS;
