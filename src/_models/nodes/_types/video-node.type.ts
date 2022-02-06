import VideoContent from "../../layout/content/_types/Video.content.type";
import NodeItemCore from "../node-item-core.model";

type VideoNode = NodeItemCore & {
  frontmatter: Omit<VideoContent, "body">;
};

export default VideoNode;
