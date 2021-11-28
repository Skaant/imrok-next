import NodeItemCore from "../node-item-core.model";

type ProjectNode = NodeItemCore & {
  frontmatter: {
    id: string;
    title: string;
    descripion?: string;
  };
};

export default ProjectNode;
