import * as React from "react";
import CONTENT_TYPES from "../../../_enums/content-types.enum";
import ContentType from "../../../_models/layout/content/Content.type";
import ImageContentType from "../../../_models/layout/content/_types/Image.content.type";
import VideoContentType from "../../../_models/layout/content/_types/Video.content.type";
import ImageContent from "./_types/ImageContent";
import VideoContent from "./_types/VideoContent";

/**
 * `<Content {...content} />` is purely a **switch component**.
 */
function Content({ content }: { content: ContentType }) {
  if (typeof content === "string" || typeof content === "function")
    return <>{content}</>;
  if (typeof content === "object") {
    switch (content["type"]) {
      case CONTENT_TYPES.IMAGE:
        return <ImageContent {...(content as ImageContentType)} />;
      case CONTENT_TYPES.VIDEO:
        return <VideoContent {...(content as VideoContentType)} />;
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
