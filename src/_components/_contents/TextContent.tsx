import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import TextContentType from "../../_types/content/_externalContents/TextContent.type";
import Section from "../../_types/layout/Section.type";
import ExternalContentLayout from "../ExternalContentLayout/ExternalContentLayout";
import { HEADER_DISPLAYS } from "../ExternalContentLayout/ExternalContentLayoutHeader";
import { RowOrCard } from "../RowOrCardLayout";

function TextContent(
  props: Section<TextContentType> & {
    target: RowOrCard;
  }
) {
  const { content, displays, col } = props;
  const { display, short, title } = content;
  const className =
    (props.className || "") +
    (col ? ` col-${col}` : "") +
    (display ? ` display-${display}` : "");
  return (
    <ExternalContentLayout
      {...props}
      className={className}
      displays={{
        [HEADER_DISPLAYS.TITLE]:
          (displays ? displays[HEADER_DISPLAYS.TITLE] : true) && !short,
      }}
    >
      {short ? (
        <p className="font-curvy">{title}</p>
      ) : (
        <MDXRenderer>{content.body}</MDXRenderer>
      )}
    </ExternalContentLayout>
  );
}

export default TextContent;
