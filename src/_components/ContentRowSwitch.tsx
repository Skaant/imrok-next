import React, { ReactElement } from "react";
import CONTENT_TYPES from "../_enums/content-types.enum";
import InternalContent from "../_types/content/InternalContent.type";
import ExternalContent from "../_types/content/ExternalContent.type";
import ImageContent from "../_types/content/_externalContents/ImageContent.type";
import VideoContent from "../_types/content/_externalContents/VideoContent.type";
import LinksListContent from "../_types/content/_internalContents/LinksListContent.type";
import Row from "../_types/layout/Row.type";
import ImageContentRow from "./_contentRows/ImageContentRow";
import VideoContentRow from "./_contentRows/VideoContentRow";
import LinksListContentRow from "./_contentRows/LinksListContentRow";

function ContentRowSwitch({
  content,
}: {
  content: Row<InternalContent> | Row<ExternalContent>;
}): ReactElement {
  switch (content["type"]) {
    case CONTENT_TYPES.IMAGE:
      return <ImageContentRow {...(content as Row<ImageContent>)} />;
    case CONTENT_TYPES.VIDEO:
      return <VideoContentRow {...(content as Row<VideoContent>)} />;
    case CONTENT_TYPES.LINKS_LIST:
      return <LinksListContentRow {...(content as Row<LinksListContent>)} />;
    default:
      throw Error(
        `Content type not valid : ${JSON.stringify(
          content
        )} ${typeof content} ${content["type"]} (${typeof content["type"]})`
      );
  }
}

export default ContentRowSwitch;
