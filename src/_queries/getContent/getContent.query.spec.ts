import CONTENT_TYPES from "../../_enums/content-types.enum";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ImageContent from "../../_models/layout/content/_types/Image.content.type";
import VideoContent from "../../_models/layout/content/_types/Video.content.type";
import NodeItemCore from "../../_models/nodes/node-item-core.model";
import getContent from "./getContent.query";

describe("getContent query", () => {
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
    await getContent<MockContent>(graphqlSpy, "params", "query");
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
    }
  `);
  });

  it("Should reformat graphql result to ContentType format", async () => {
    const result = await getContent<MockContent>(graphqlSpy, "params", "query");
    expect(result).toEqual([
      {
        title: "title",
        body: "body",
        params: "params",
      },
    ]);
  });
});
