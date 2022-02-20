import * as React from "react";
import RowType from "../../_models/layout/Row.type";
import Card from "./Card/Card";
import Content from "./Content/Content";

function Row({
  id,
  title,
  level,
  content,
  background,
  color,
  card,
  className,
}: RowType) {
  return (
    <div
      {...(id && { id })}
      className={`row p-12 p-md-24 shadow ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${className ? ` ${className}` : ""}`}
    >
      {card ? (
        <Card {...card} />
      ) : (
        <>
          {level && title && React.createElement(`h${level}`, {}, title)}
          {content && <Content content={content} />}
        </>
      )}
    </div>
  );
}

export default Row;
