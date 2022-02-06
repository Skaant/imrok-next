import BaseNode from "./_types/base-node.model";
import ProjectNode from "./_types/project-node.model";
import VideoNode from "./_types/video-node.type";

type NodeItem = BaseNode | VideoNode | ProjectNode;

export default NodeItem;
