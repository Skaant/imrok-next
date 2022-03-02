import * as React from "react";
import COLORS from "../_enums/colors.enum";
import Content from "../_types/content/Content.type";
import Section from "../_types/layout/Section.type";
import ContentSwitch from "./ContentSwitch";

function Card(
  props: Section<Content> & {
    children?: React.ReactElement;
  }
) {
  const {
    background = COLORS.light,
    color = COLORS.dark,
    level,
    title,
    col = "md",
    className,
    children,
  } = props;
  return (
    <div
      className={`card p-24 p-md-32 bo-rad-6 shadow-m bg-${background} color-${color}${` col-${col}`}${
        className ? ` ${className}` : ""
      }`}
    >
      {title && level && React.createElement(`h${level}`, {}, title)}
      {children ? children : <ContentSwitch target="card" {...props} />}
    </div>
  );
}

export default Card;
