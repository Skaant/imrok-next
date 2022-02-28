import CATEGORIES from "../../../_enums/categories.enum";
import CONTENT_TYPES from "../../../_enums/content-types.enum";
import { GetContentsSorts } from "../getContents.query";
import argsBuilder from "./argsBuilder.helper";

describe("argsBuilder", () => {
  /** CLEAR CASE */
  it("Should return an empty string if both types and filters are undefined", () => {
    expect(argsBuilder({})).toBe("");
  });

  /**
   * SINGLE ARG CASES
   */

  /** TYPES / TYPES: CONTENT_TYPES */
  it("Should returns a filter if types: CONTENT_TYPES is given", () => {
    expect(argsBuilder({ types: CONTENT_TYPES.TEXT })).toBe(
      `(filter: { frontmatter: { type: { eq: "${CONTENT_TYPES.TEXT}" } } })`
    );
  });
  /** TYPES / TYPES: CONTENT_TYPES[] */
  it("Should returns a filter if types: CONTENT_TYPES[] is given", () => {
    expect(
      argsBuilder({ types: [CONTENT_TYPES.TEXT, CONTENT_TYPES.IMAGE] })
    ).toBe(
      `(filter: { frontmatter: { type: { in: ["${CONTENT_TYPES.TEXT}", "${CONTENT_TYPES.IMAGE}"] } } })`
    );
  });
  /** FILTERS / PATH */
  it("Should returns a filter if filter path is given", () => {
    const path = "_videos";
    expect(argsBuilder({ filters: { path } })).toBe(
      `(filter: { fileAbsolutePath: { regex: "/_data/${path}/" } })`
    );
  });
  /** FILTERS / CATEGORY */
  it("Should returns a filter if filter category is given", () => {
    const category = CATEGORIES.pensees;
    expect(argsBuilder({ filters: { category } })).toBe(
      `(filter: { frontmatter: { category: { eq: "${category}" } } })`
    );
  });
  /** FILTERS / TAGS */
  it("Should returns a filter if filter tags is given", () => {
    const tags = ["radiant", "smooth", "smart"];
    expect(argsBuilder({ filters: { tags } })).toBe(
      `(filter: { frontmatter: { tags: { in: "${tags.join('", ')}" } } })`
    );
  });
  /** SORT / UPDATED_AT */
  it("Should returns a sort if sort updatedAt is given", () => {
    const updatedAt = ["radiant", "smooth", "smart"];
    expect(argsBuilder({ sort: { updatedAt: "DESC" } })).toBe(
      `(sort: { fields: frontmatter___updatedAt, order: DESC })`
    );
  });

  /**
   * MULTIPLE ARGS CASES
   */

  /** TYPES & PATH */
  it("Should returns two filters if both types & path are given", () => {
    const path = "_projects";
    expect(
      argsBuilder({
        types: CONTENT_TYPES.TEXT,
        filters: { path },
      })
    ).toBe(
      `(filter: { fileAbsolutePath: { regex: "/_data/${path}/" }, frontmatter: { type: { eq: "${CONTENT_TYPES.TEXT}" } } })`
    );
  });

  /** CATEGORY & SORT */
  it("Should returns one filter & one sort if both category & sort are given", () => {
    const category = CATEGORIES.permaculture;
    const sort: GetContentsSorts = { updatedAt: "DESC" };
    expect(
      argsBuilder({
        filters: { category },
        sort,
      })
    ).toBe(
      `(filter: { frontmatter: { category: { eq: "${category}" } } }, sort: { fields: frontmatter___updatedAt, order: DESC })`
    );
  });
});
