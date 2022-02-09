import * as React from "react";
import VideoContentType from "../../../../_models/layout/content/_types/Video.content.type";

function VideoContent({ id, title }: VideoContentType) {
  return (
    <div className="video-content col-md">
      <iframe
        src={`https://youtube.com/watch?v=${id}`}
        className="w-100"
      ></iframe>
      <p>{title}</p>
    </div>
  );
}

export default VideoContent;
