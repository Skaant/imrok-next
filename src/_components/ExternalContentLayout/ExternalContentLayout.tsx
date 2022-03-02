import * as React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import ExternalContent from "../../_types/content/ExternalContent.type";
import Section from "../../_types/layout/Section.type";
import Card from "../Card";
import ExternalContentLayoutFooter, {
  FooterDisplays,
  FOOTER_DISPLAYS,
} from "./ExternalContentLayoutFooter";
import ExternalContentLayoutHeader, {
  HeaderDisplays,
  HEADER_DISPLAYS,
} from "./ExternalContentLayoutHeader";

export type RowOrCard = "row" | "card";

function RowOrCardLayout({
  target,
  children,
  ...section
}: Section<ExternalContent> & {
  target: RowOrCard;
  children: ReactElement;
}) {
  if (target === "row") {
    return (
      <div
        className={`type-${section.content.type} ${
          section.col ? ` col-${section.col}` : ""
        }`}
      >
        {children}
      </div>
    );
  } else {
    return <Card {...section}>{children}</Card>;
  }
}

export type ExternalContentLayoutDisplays = HeaderDisplays & FooterDisplays;

function ExternalContentLayout({
  content,
  target,
  displays = {
    [HEADER_DISPLAYS.CATEGORY]: true,
    [HEADER_DISPLAYS.TYPE]: true,
    [HEADER_DISPLAYS.TITLE]: true,
    [FOOTER_DISPLAYS.CREATED_AT]: true,
    [FOOTER_DISPLAYS.UPDATED_AT]: true,
    [FOOTER_DISPLAYS.TAGS]: true,
    [FOOTER_DISPLAYS.AUTHOR]: true,
    [FOOTER_DISPLAYS.SOURCE]: true,
  },
  children,
  ...layout
}: Section<ExternalContent> & {
  target: RowOrCard;
  displays?: ExternalContentLayoutDisplays;
  children: ReactElement;
}) {
  const { type, category, updatedAt, tags, title, createdAt, author, source } =
    content;
  return (
    <RowOrCardLayout target={target}>
      <>
        <ExternalContentLayoutHeader
          category={category}
          type={type}
          title={title}
          displays={displays}
        />
        {children}
        <ExternalContentLayoutFooter
          tags={tags}
          createdAt={createdAt}
          updatedAt={updatedAt}
          author={author}
          source={source}
          displays={displays}
        />
      </>
    </RowOrCardLayout>
  );
}

export default ExternalContentLayout;
