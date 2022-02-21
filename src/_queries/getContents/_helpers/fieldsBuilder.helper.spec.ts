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
});
