import * as React from "react";
import RowType from "../../_types/layout/Row.type";
import VideoContent from "../../_types/content/_externalContents/VideoContent.type";
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
