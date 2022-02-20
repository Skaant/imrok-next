import React, { ReactElement } from "react";
import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ContentType from "../../../_models/layout/content/Content.type";
import ImageContentType from "../../../_models/layout/content/_types/Image.content.type";
import VideoContentType from "../../../_models/layout/content/_types/Video.content.type";
import ImageContent from "./_types/ImageContent";
import LinksListContent from "./_types/LinksListContent";
import VideoContent from "./_types/VideoContent";
import LinksListContentType from "../../../_models/layout/content/_types/LinksList.content.type";
import Row from "../../../_models/layout/Row.type";

/**
 * `<Content {...content} />` is purely a **switch component**.
 */
function Content({ content }: { content: ContentType }): ReactElement {
  if (typeof content === "string") return <>{content}</>;
  if (typeof content === "object") {
    if (content["$$typeof"] === Symbol.for("react.element")) {
      return content as ReactElement;
    }
    switch (content["type"]) {
      case CONTENT_TYPES.IMAGE:
        return <ImageContent {...(content as Row<ImageContentType>)} />;
      case CONTENT_TYPES.VIDEO:
        return <VideoContent {...(content as Row<VideoContentType>)} />;
      case CONTENT_TYPES.LINKS_LIST:
        return <LinksListContent {...(content as Row<LinksListContentType>)} />;
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

export default Content;
