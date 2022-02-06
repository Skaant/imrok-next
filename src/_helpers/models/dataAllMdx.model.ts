import BaseNode from "../../_models/nodes/_types/base-node.model";

/**
 * GraphQL queries result has the following shape.
 */
type DataAllMdx<NodeType = BaseNode> = {
  allMdx: {
    nodes: [NodeType];
  };
};

export default DataAllMdx;
