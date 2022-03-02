import * as React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import RowType from "../_types/layout/Row.type";
import Card from "./Card";
import ContentSwitch from "./ContentSwitch";

function Row(
  props: RowType & {
    children?: ReactElement;
  }
) {
  const { id, title, level, background, color, card, className, children } =
    props;
  return (
    <div
      {...(id && { id })}
      className={`row p-12 p-md-24 shadow ${
        background ? ` bg-${background}` : ""
      }${color ? ` color-${color}` : ""}${className ? ` ${className}` : ""}`}
    >
      {title && level && React.createElement(`h${level}`, {}, title)}
      {children ? (
        children
      ) : card ? (
        <Card {...card} />
      ) : (
        <ContentSwitch target="row" {...props} />
      )}
    </div>
  );
}

export default Row;
