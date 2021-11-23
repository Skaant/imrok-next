import NodeItem from "../node-item.model";

type CardNode = NodeItem & {
  frontmatter: {
    id: string;
    title: string;
    slug: string;
    tags: string[];
  };
};

export default CardNode;
