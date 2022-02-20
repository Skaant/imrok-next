import * as React from "react";
import COLORS from "../_enums/colors.enum";
import CardType from "../_models/layout/Card.type";
import Content from "./ContentSwitch";

function Card({
  background = COLORS.light,
  color = COLORS.dark,
  level,
  title,
  content,
  col = "md",
  className,
}: CardType) {
  return (
    <div
      className={`card p-24 p-md-32 bo-rad-6 shadow-m bg-${background} color-${color}${` col-${col}`}${
        className ? ` ${className}` : ""
      }`}
    >
      {level && title && React.createElement(`h${level}`, {}, title)}
      <Content content={content} />
    </div>
  );
}

export default Card;
