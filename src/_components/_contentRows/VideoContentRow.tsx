import * as React from "react";
import RowType from "../../_models/layout/Row.type";
import VideoContent from "../../_models/layout/content/_types/Video.content.type";
import Row from "../Row";

function VideoContentRow({
  id,
  className,
  ...videoRow
}: RowType<VideoContent>) {
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

export default VideoContentRow;
