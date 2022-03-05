import * as React from "react";
import ImageContentType from "../../_types/content/_externalContents/ImageContent.type";
import Section from "../../_types/layout/Section.type";
import ExternalContentLayout from "../ExternalContentLayout/ExternalContentLayout";
import { RowOrCard } from "../RowOrCardLayout";

function ImageContent(
  props: Section<ImageContentType> & {
    target: RowOrCard;
  }
) {
  const { content } = props;
  const { url, alt, legend } = content;
  return (
    <ExternalContentLayout {...props}>
      <>
        <img src={url} alt={alt} />
        {legend && <p>{legend}</p>}
      </>
    </ExternalContentLayout>
  );
}

export default ImageContent;
