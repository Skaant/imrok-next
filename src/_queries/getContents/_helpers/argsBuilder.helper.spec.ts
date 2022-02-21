import CONTENT_TYPES from "../../../_enums/content-types.enum";
import argsBuilder from "./argsBuilder.helper";

describe("argsBuilder", () => {
  it("Should return an empty string if both types and filters are undefined", () => {
    expect(argsBuilder({})).toBe("");
  });
  it("Should returns a filter if types: CONTENT_TYPES is given", () => {
    expect(argsBuilder({ types: CONTENT_TYPES.TEXT })).toBe(
      `(filter: { type: { eq: "${CONTENT_TYPES.TEXT}" } })`
    );
  });
  it("Should returns a filter if types: CONTENT_TYPES[] is given", () => {
    expect(
      argsBuilder({ types: [CONTENT_TYPES.TEXT, CONTENT_TYPES.IMAGE] })
    ).toBe(
      `(filter: { type: { in: ["${CONTENT_TYPES.TEXT}", "${CONTENT_TYPES.IMAGE}"] } })`
    );
  });
  it("Should returns a filter if filter path is given", () => {
    const path = "_videos";
    expect(argsBuilder({ filters: { path } })).toBe(
      `(filter: { fileAbsolutePath: { regex: "/_data/${path}/" } })`
    );
  });
  it("Should returns two filters if both types & path are given", () => {
    const path = "_projects";
    expect(
      argsBuilder({
        types: CONTENT_TYPES.TEXT,
        filters: { path },
      })
    ).toBe(
      `(filter: { type: { eq: "${CONTENT_TYPES.TEXT}" }, fileAbsolutePath: { regex: "/_data/${path}/" } })`
    );
  });
});
