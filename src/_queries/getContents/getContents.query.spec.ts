import CONTENT_TYPES from "../../_enums/content-types.enum";
import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import TextContent from "../../_types/content/_externalContents/TextContent.type";
import NodeItemCore from "../../_types/queries/NodeItemCore.model";
import getContents from "./getContents.query";
import * as argsBuilder from "./_helpers/argsBuilder.helper";
import * as fieldsBuilder from "./_helpers/fieldsBuilder.helper";

describe("getContents query", () => {
  let graphqlSpy: jest.Mock;

  beforeEach(() => {
    graphqlSpy = jest.fn().mockResolvedValue({
      data: {
        allMdx: {
          nodes: [
            {
              frontmatter: {
                _id: "yodeleihihou",
                type: CONTENT_TYPES.TEXT,
              },
              body: "body",
            },
          ],
        },
      } as DataAllMdx<NodeItemCore<Omit<TextContent, "body">>>,
    });
  });

  it("Should call both argsBuilder and fieldsBuilder", async () => {
    const argsBuilderSpy = jest.spyOn(argsBuilder, "default");
    const fieldsBuilderSpy = jest.spyOn(fieldsBuilder, "default");
    await getContents(graphqlSpy, {});
    expect(argsBuilderSpy).toHaveBeenCalled();
    expect(fieldsBuilderSpy).toHaveBeenCalled();
  });

  it("Should call graphql with default args and fields", async () => {
    await getContents(graphqlSpy, {});
    // Respect indentation
    expect(graphqlSpy).toHaveBeenCalledWith(`
    query {
      allMdx {
        nodes {
          frontmatter {
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
          }
          body
        }
      }
    }`);
  });

  it("Should reformat graphql result to TextContent format", async () => {
    const result = (await getContents(graphqlSpy, {
      types: [CONTENT_TYPES.TEXT],
    })) as TextContent[];
    expect(result).toEqual([
      {
        _id: "yodeleihihou",
        body: "body",
        type: CONTENT_TYPES.TEXT,
      } as TextContent,
    ]);
  });

  /** @todo Use graphql-js objects to build up the query */
  it.todo("Should allow complex param & queries");
});
