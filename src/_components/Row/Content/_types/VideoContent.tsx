import * as React from "react";
import VideoContentType from "../../../../_models/layout/content/_types/Video.content.type";

function VideoContent({ id, title }: VideoContentType) {
  return (
    <div className="video-content">
      <iframe src={`https://youtube.com/watch?v=${id}`}></iframe>
      <p>{title}</p>
    </div>
  );
}

export default VideoContent;
