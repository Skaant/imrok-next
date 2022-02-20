import DataAllMdx from "../../_helpers/models/dataAllMdx.model";
import ProjectContent from "../../_models/layout/content/_types/Project.content.type";
import NodeItemCore from "../../_models/nodes/node-item-core.model";
import getProjects, { PROJECTS_FILTERS } from "./getProjects.query";

describe("getProjects query", () => {
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
    } as DataAllMdx<NodeItemCore<Omit<ProjectContent, "body">>>,
  });

  it("Should call graphql with correct arguments", async () => {
    await getProjects(graphqlSpy);
    expect(graphqlSpy).toHaveBeenCalledWith(`
    query {
      allMdx {
        nodes {
          frontmatter {
            _id
            slug
            title
            refs {
              key
              path
            }
          }
          body
        }
      }
    }`);
  });
});
