import React, { ReactElement } from "react";
import CONTENT_TYPES from "../_enums/content-types.enum";
import ContentType from "../_types/content/Content.type";
import Section from "../_types/layout/Section.type";
import TextContent from "./_contents/TextContent";
import TextContentType from "../_types/content/_externalContents/TextContent.type";
import ImageContent from "./_contents/ImageContent";
import ImageContentType from "../_types/content/_externalContents/ImageContent.type";
import VideoContent from "./_contents/VideoContent";
import VideoContentType from "../_types/content/_externalContents/VideoContent.type";
import LinksListContent from "./_contents/LinksListContent";
import LinksListContentType from "../_types/content/_internalContents/LinksListContent.type";
import { RowOrCard } from "./RowOrCardLayout";

function ContentSwitch({
  target,
  ...section
}: Section<ContentType> & {
  target: RowOrCard;
}): ReactElement {
  const { content } = section;
  if (typeof content === "string") return <>{content}</>;
  if (typeof content === "object") {
    if (content["$$typeof"] === Symbol.for("react.element")) {
      return content as ReactElement;
    }
    switch (content["type"]) {
      case CONTENT_TYPES.TEXT:
        return (
          <TextContent
            target={target}
            {...(section as Section<TextContentType>)}
          />
        );
      case CONTENT_TYPES.IMAGE:
        return (
          <ImageContent
            target={target}
            {...(section as Section<ImageContentType>)}
          />
        );
      case CONTENT_TYPES.VIDEO:
        return (
          <VideoContent
            target={target}
            {...(section as Section<VideoContentType>)}
          />
        );
      case CONTENT_TYPES.LINKS_LIST:
        return (
          <LinksListContent
            target={target}
            {...(section as Section<LinksListContentType>)}
          />
        );
      default:
        throw Error(
          `Content type not valid : ${JSON.stringify(
            content
          )} ${typeof content} ${content["type"]} (${typeof content["type"]})`
        );
    }
  }
  throw Error(`Content is not valid : ${content} ${typeof content})`);
}

export default ContentSwitch;
