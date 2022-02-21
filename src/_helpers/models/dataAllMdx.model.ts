import NodeItemCore from "../../_types/queries/NodeItemCore.model";

/**
 * GraphQL queries result has the following shape.
 */
type DataAllMdx<NodeType = NodeItemCore> = {
  allMdx: {
    nodes: NodeType[];
  };
};

export default DataAllMdx;
