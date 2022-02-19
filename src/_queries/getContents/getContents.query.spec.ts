import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import NodeItemCore from "../../_models/nodes/node-item-core.model";
import getContents from "./getContents.query";

describe("getContents query", () => {
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

  it("Should call graphql with given props and query", async () => {
    await getContents<MockContent>(graphqlSpy, "query", "params");
    // Respect indentation
    expect(graphqlSpy).toHaveBeenCalledWith(`
    query {
      allMdx(
        params
      ) {
        nodes {
          query
        }
      }
    }`);
  });

  it("Should reformat graphql result to ContentType format", async () => {
    const result = await getContents<MockContent>(
      graphqlSpy,
      "query",
      "params"
    );
    expect(result).toEqual([
      {
        title: "title",
        body: "body",
      },
    ]);
  });

  /** @todo Use graphql-js objects to build up the query */
  it.todo("Should allow complex param & queries");
});
