import NodeItemCore from "../node-item-core";

type BaseNode = NodeItemCore & {
  frontmatter: {
    id: string;
    title: string;
    slug: string;
    tags: string[];
  };
};

export default BaseNode;
