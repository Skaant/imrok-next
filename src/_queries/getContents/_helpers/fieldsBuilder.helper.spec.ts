import fieldsBuilder from "./fieldsBuilder.helper";

describe("fieldsBuilder", () => {
  it("Should return the full list of all external contents properties if types is undefined", () => {
    expect(fieldsBuilder({})).toBe(`frontmatter {
            _id
            alt
            author
            category
            createdAt
            display
            id
            legend
            refs { key _id }
            short
            slug
            source
            tags
            title
            type
            updatedAt
            url
          }`);
  });

  it("Should add row and card properties if rows param is true", () => {
    expect(fieldsBuilder({}, true)).toBe(`frontmatter {
            _id
            alt
            author
            card { id title level background color className col }
            category
            createdAt
            display
            id
            legend
            refs { key _id }
            row { id title level background color className col }
            short
            slug
            source
            tags
            title
            type
            updatedAt
            url
          }`);
  });

  it.todo("Should return the target content type (1) properties");
  it.todo(
    "Should return ... content type (1) + row & card properties ... if rows param is true"
  );
  it.todo("Should return the target content types (2..*) properties");
});
