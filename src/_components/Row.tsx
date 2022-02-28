import * as React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Content from "../_types/content/Content.type";
import RowType from "../_types/layout/Row.type";
import Card from "./Card";
import ContentSwitch from "./ContentSwitch";

function RowContainer({
  id,
  background,
  color,
  className,
  children,
}: Pick<RowType, "id" | "background" | "color" | "className"> & {
  children: ReactElement;
}) {
  return (
    <div
      {...(id && { id })}
      className={`row p-12 p-md-24 shadow ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}

function Row({
  id,
  title,
  level,
  content,
  background,
  color,
  card,
  className,
  children,
  ...props
}: RowType & {
  children?: ReactElement;
}) {
  if (children) {
    return (
      <RowContainer
        id={id}
        background={background}
        color={color}
        className={className}
      >
        {children}
      </RowContainer>
    );
  } else {
    const _content = !content
      ? Object.keys(props).length
        ? (props as Content)
        : undefined
      : typeof content === "object"
      ? { ...content, ...(Object.keys(props).length ? props : {}) }
      : content;
    return (
      <RowContainer
        id={id}
        background={background}
        color={color}
        className={className}
      >
        <>
          {level && title && React.createElement(`h${level}`, {}, title)}
          {card ? (
            <Card {...card} />
          ) : (
            content && <ContentSwitch content={_content} />
          )}
        </>
      </RowContainer>
    );
  }
}

export default Row;
