import fieldsBuilder from "./fieldsBuilder.helper";

describe("fieldsBuilder", () => {
  it("Should return the full list of all external contents properties if types is undefined", () => {
    expect(fieldsBuilder({})).toBe(`frontmatter {
            _id
            alt
            category
            id
            legend
            refs { key _id }
            slug
            tags
            title
            type
            url
          }`);
  });

  it("Should add Row properties if rows param is true", () => {
    expect(fieldsBuilder({}, true)).toBe(`frontmatter {
            _id
            alt
            background
            category
            className
            color
            id
            legend
            level
            refs { key _id }
            slug
            tags
            title
            type
            url
          }`);
  });

  it.todo("Should return the target content (1) properties");
  it.todo("Should return the target contents (2..*) properties");
});
