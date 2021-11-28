import BaseNode from "../../_models/nodes/_types/base-node.model";

type DataAllMdx<NodeType = BaseNode> = {
  allMdx: {
    nodes: [NodeType];
  };
};

export default DataAllMdx;
