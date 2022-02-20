import * as React from "react";
import RowType from "../../../../_models/layout/Row.type";
import VideoContentType from "../../../../_models/layout/content/_types/Video.content.type";
import Row from "../../Row";

function VideoContent({
  id,
  className,
  ...videoRow
}: RowType<VideoContentType>) {
  return (
    <Row
      className={`video-content col-md`}
      {...videoRow}
      card={{
        content: (
          <a href={`https://youtube.com/watch?v=${id}`}>{videoRow.title}</a>
        ),
      }}
    />
  );
}

export default VideoContent;
