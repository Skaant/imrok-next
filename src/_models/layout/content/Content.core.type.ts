/**
 * `body` is the only property shared by
 *  all complex content types.
 *
 * This particular field will be extracted from
 *  the MDX part of the file, while all others
 *  properties will be extracted from
 *  the frontammer YAML.
 */
type ContentCore = {
  body: string;
};

export default ContentCore;
