import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import NodeItemCore from "../../_models/nodes/node-item-core.model";
import getContent from "./getContent.query";

describe("getContent query", () => {
  it("Should call graphql with given props and query", async () => {
    type MockContent = { body: string; title: string };
    const graphqlSpy = jest.fn().mockResolvedValue({
      data: {
        allMdx: {
          nodes: [
            {
              frontmatter: {
                title: "title",
              },
              body: "body",
            },
          ],
        },
      } as DataAllMdx<NodeItemCore<Omit<MockContent, "body">>>,
    });
    await getContent<MockContent>(graphqlSpy, "params", "query");
    /** Respect indentation */
    expect(graphqlSpy).toHaveBeenCalledWith(`
    query {
      allMdx(
        params
      ) {
        nodes {
          query
        }
      }
    }
  `);
  });
  it.todo("Should reformat graphql result to ContentType format");
  describe("Works for all content types", () => {
    it.todo("Should work for ImageContent");
    it.todo("Should work for VideoContent");
  });
});
