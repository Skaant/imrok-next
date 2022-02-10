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
      },
    ]);
  });

  describe("Works for all content types", () => {
    it("Should work for ImageContent", async () => {
      const graphqlImageSpy = jest.fn().mockResolvedValue({
        data: {
          allMdx: {
            nodes: [
              {
                frontmatter: {
                  type: CONTENT_TYPES.IMAGE,
                  url: "url",
                  alt: "alt",
                  legend: "legend",
                },
                body: "body",
              },
            ],
          },
        } as DataAllMdx<NodeItemCore<Omit<ImageContent, "body">>>,
      });
      const result = await getContent<ImageContent>(graphqlImageSpy, "", "");
      expect(result).toEqual([
        {
          type: CONTENT_TYPES.IMAGE,
          url: "url",
          alt: "alt",
          legend: "legend",
          body: "body",
        },
      ]);
    });

    it("Should work for VideoContent", async () => {
      const graphqlImageSpy = jest.fn().mockResolvedValue({
        data: {
          allMdx: {
            nodes: [
              {
                frontmatter: {
                  type: CONTENT_TYPES.VIDEO,
                  id: "id",
                  title: "title",
                },
                body: "body",
              },
            ],
          },
        } as DataAllMdx<NodeItemCore<Omit<VideoContent, "body">>>,
      });
      const result = await getContent<VideoContent>(graphqlImageSpy, "", "");
      expect(result).toEqual([
        {
          type: CONTENT_TYPES.VIDEO,
          id: "id",
          title: "title",
          body: "body",
        },
      ]);
    });
  });
});
