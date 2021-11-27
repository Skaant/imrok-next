import NodeItemCore from "../node-item-core.model";

type BaseNode = NodeItemCore & {
  frontmatter: {
    id: string;
    title: string;
    slug: string;
    tags: string[];
  };
};

export default BaseNode;
