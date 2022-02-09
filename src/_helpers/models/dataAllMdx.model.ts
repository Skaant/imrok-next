import NodeItemCore from "../../_models/nodes/node-item-core.model";

/**
 * GraphQL queries result has the following shape.
 */
type DataAllMdx<NodeType = NodeItemCore> = {
  allMdx: {
    nodes: NodeType[];
  };
};

export default DataAllMdx;
