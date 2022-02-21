import React, { ReactElement } from "react";
import ContentType, {
  ExternalContent,
  InternalContent,
} from "../_types/content/Content.type";
import Row from "../_types/layout/Row.type";
import ContentRowSwitch from "./ContentRowSwitch";

function ContentSwitch({ content }: { content: ContentType }): ReactElement {
  if (typeof content === "string") return <>{content}</>;
  if (typeof content === "object") {
    if (content["$$typeof"] === Symbol.for("react.element")) {
      return content as ReactElement;
    }
    return (
      <ContentRowSwitch
        content={content as Row<InternalContent | ExternalContent>}
      />
    );
  }
  throw Error(`Content is not valid : ${content} ${typeof content})`);
}

export default ContentSwitch;
