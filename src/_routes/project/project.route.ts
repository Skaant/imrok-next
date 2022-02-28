import ProjectContent from "../../_types/content/_externalContents/ProjectContent.type";
import RouteFactory from "../../_types/routes/RouteFactory.type";
import { DefaultTemplateContext } from "../../_templates/default.template";
import getContentsFromProjectRefs from "../../_queries/getContentsFromProject/getContentsFromProject.query";

/**
 * This route factory wrapper should be
 *  used to wrap projects' route declaration.
 */
const projectRouteFactory: RouteFactory<{ project: ProjectContent }> = async (
  parentPath,
  createPage,
  graphql,
  { project: { slug, title, refs } }
) => {
  const contents = await getContentsFromProjectRefs(graphql, refs);
  createPage({
    path: parentPath + "/" + slug,
    component: require.resolve("../../_templates/default.template.tsx"),
    context: {
      title,
      rows: contents.map((content) => ({ content })),
    } as DefaultTemplateContext,
  });
};

export default projectRouteFactory;
