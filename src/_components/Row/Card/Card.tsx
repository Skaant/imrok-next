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
      className={`card p-8 p-md-16 bo-rad-6 shadow-m ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${` col-${col}`}${
        className ? ` ${className}` : ""
      }`}
    >
      {level &&
        title &&
        React.createElement(
          `h${level}`,
          {
            className: `color-light text-center`,
          },
          title
        )}
      <Content content={content} />
    </div>
  );
}

export default Card;
