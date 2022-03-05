import * as React from "react";
import VideoContentType from "../../_types/content/_externalContents/VideoContent.type";
import ExternalContentLayout from "../ExternalContentLayout/ExternalContentLayout";
import Section from "../../_types/layout/Section.type";
import { RowOrCard } from "../RowOrCardLayout";

function VideoContent(
  props: Section<VideoContentType> & {
    target: RowOrCard;
  }
) {
  const { content } = props;
  const { id, title } = content;
  return (
    <ExternalContentLayout {...props}>
      <>
        <a href={`https://youtube.com/watch?v=${id}`}>{title}</a>
      </>
    </ExternalContentLayout>
  );
}

export default VideoContent;
