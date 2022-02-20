import React from "react";
import LinksListContentType from "../../../../_models/layout/content/_types/LinksList.content.type";
import Row from "../../Row";
import COLORS from "../../../../_enums/colors.enum";
import RowType from "../../../../_models/layout/Row.type";

function LinksListContent({
  id,
  description,
  links,
  ...props
}: RowType<LinksListContentType>) {
  return (
    <Row
      id={id}
      card={{
        ...props,
        background: COLORS.light,
        color: COLORS.dark,
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

export default LinksListContent;
