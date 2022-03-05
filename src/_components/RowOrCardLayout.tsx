import React, { ReactElement } from "react";
import ExternalContent from "../_types/content/ExternalContent.type";
import InternalContent from "../_types/content/InternalContent.type";
import Section from "../_types/layout/Section.type";
import Card from "./Card";

export type RowOrCard = "row" | "card";

/**
 * Used at root of `InternalContent` component.
 *
 * @note Parent of `ExternalContentCardLayout`.
 */
function RowOrCardLayout({
  target,
  children,
  ...section
}: Section<ExternalContent | InternalContent> & {
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

export default RowOrCardLayout;
