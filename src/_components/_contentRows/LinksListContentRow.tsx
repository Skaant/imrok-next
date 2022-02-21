import React from "react";
import LinksListContent from "../../_types/content/_internalContents/LinksListContent.type";
import Row from "../Row";
import RowType from "../../_types/layout/Row.type";

function LinksListContentRow({
  id,
  description,
  links,
  ...props
}: RowType<LinksListContent>) {
  return (
    <Row
      id={id}
      card={{
        ...props,
        content: (
          <>
            {description && <p>{description}</p>}
            <ul>
              {links.map(({ url, label }) => (
                <li key={url}>
                  <a href={url} className="color-dark">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ),
      }}
    />
  );
}

export default LinksListContentRow;
