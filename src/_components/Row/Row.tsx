import * as React from "react";
import RowType from "../../_models/layout/Row.type";
import Card from "./Card/Card";
import Content from "./Content/Content";

function Row({
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
      className={`row pr-12 pl-12 pr-md-24 pl-md-24 shadow ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${className ? ` ${className}` : ""}`}
    >
      {card ? (
        <Card {...card} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Row;
