import * as React from "react";
import VideoContentType from "../../../../_models/layout/content/_types/Video.content.type";

function VideoContent({ id, title }: VideoContentType) {
  return (
    <div className="video-content col-md">
      <a href={`https://youtube.com/watch?v=${id}`}>{title}</a>
    </div>
  );
}

export default VideoContent;
