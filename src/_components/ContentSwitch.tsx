import React, { ReactElement } from "react";
import ContentType from "../_types/content/Content.type";
import ExternalContent from "../_types/content/ExternalContent.type";
import InternalContent from "../_types/content/InternalContent.type";
import Row from "../_types/layout/Row.type";
import ContentRowSwitch from "./ContentRowSwitch";

function ContentSwitch({
  content,
  ...props
}: {
  content: ContentType;
  [key: string]: any;
}): ReactElement {
  if (typeof content === "string") return <>{content}</>;
  if (typeof content === "object") {
    if (content["$$typeof"] === Symbol.for("react.element")) {
      return content as ReactElement;
    }
    return (
      <ContentRowSwitch
        content={
          { ...content, ...props } as Row<InternalContent | ExternalContent>
        }
      />
    );
  }
  throw Error(`Content is not valid : ${content} ${typeof content})`);
}

export default ContentSwitch;
