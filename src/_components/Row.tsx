import * as React from "react";
import Content from "../_types/content/Content.type";
import RowType from "../_types/layout/Row.type";
import Card from "./Card";
import ContentSwitch from "./ContentSwitch";

function Row({
  id,
  title,
  level,
  content,
  background,
  color,
  card,
  className,
  ...props
}: RowType) {
  const _content = !content
    ? Object.keys(props).length
      ? (props as Content)
      : undefined
    : typeof content === "object"
    ? { ...content, ...(Object.keys(props).length ? props : {}) }
    : content;
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
          {_content && <ContentSwitch content={_content} />}
        </>
      )}
    </div>
  );
}

export default Row;
