import CONTENT_TYPES from "../../../_enums/content-types.enum";
import argsBuilder from "./argsBuilder.helper";

describe("argsBuilder", () => {
  /** CLEAR CASE */
  it("Should return an empty string if both types and filters are undefined", () => {
    expect(argsBuilder({})).toBe("");
  });

  /**
   * SINGLE ARG CASES
   */

  /** TYPES: CONTENT_TYPES */
  it("Should returns a filter if types: CONTENT_TYPES is given", () => {
    expect(argsBuilder({ types: CONTENT_TYPES.TEXT })).toBe(
      `(filter: { frontmatter: { type: { eq: "${CONTENT_TYPES.TEXT}" } } })`
    );
  });
  /** TYPES: CONTENT_TYPES[] */
  it("Should returns a filter if types: CONTENT_TYPES[] is given", () => {
    expect(
      argsBuilder({ types: [CONTENT_TYPES.TEXT, CONTENT_TYPES.IMAGE] })
    ).toBe(
      `(filter: { frontmatter: { type: { in: ["${CONTENT_TYPES.TEXT}", "${CONTENT_TYPES.IMAGE}"] } } })`
    );
  });
  /** PATH */
  it("Should returns a filter if filter path is given", () => {
    const path = "_videos";
    expect(argsBuilder({ filters: { path } })).toBe(
      `(filter: { fileAbsolutePath: { regex: "/_data/${path}/" } })`
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
});
