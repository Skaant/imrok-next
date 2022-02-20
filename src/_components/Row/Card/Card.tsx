import * as React from "react";
import CardType from "../../../_models/layout/Card.type";
import Content from "../Content/Content";

function Card({
  background,
  color,
  level,
  title,
  content,
  col = "md",
  className,
}: CardType) {
  return (
    <div
      className={`card p-24 p-md-32 bo-rad-6 shadow-m ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${` col-${col}`}${
        className ? ` ${className}` : ""
      }`}
    >
      {level && title && React.createElement(`h${level}`, {}, title)}
      <Content content={content} />
    </div>
  );
}

export default Card;
