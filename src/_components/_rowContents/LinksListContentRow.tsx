import React from "react";
import LinksListContent from "../../_types/content/_internalContents/LinksListContent.type";
import Row from "../Row";
import RowType from "../../_types/layout/Row.type";
import Badge from "../Badge";

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
            <ul className="">
              {links.map(({ url, label, date, category, tags, type }) => (
                <li key={url}>
                  <a href={url} className="color-dark">
                    {category && (
                      <span className="badge rounded-pill bg-highbs text-light">
                        {category}
                      </span>
                    )}
                    {date && (
                      <span className="badge rounded-pill bg-psik text-light">
                        {date}
                      </span>
                    )}
                    {type && (
                      <span className="badge rounded-pill bg-highbs text-light">
                        {type}
                      </span>
                    )}
                    {label}
                    {tags && tags.map((tag) => <Badge key={tag} label={tag} />)}
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
