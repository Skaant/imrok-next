import React from "react";
import LinksListContentType from "../../_types/content/_internalContents/LinksListContent.type";
import Badge from "../Badge";
import Section from "../../_types/layout/Section.type";
import RowOrCardLayout, { RowOrCard } from "../RowOrCardLayout";

function LinksListContent(
  props: Section<LinksListContentType> & {
    target: RowOrCard;
  }
) {
  const {
    target,
    content: { links },
  } = props;
  return (
    <RowOrCardLayout {...props}>
      <>
        <ul>
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
    </RowOrCardLayout>
  );
}

export default LinksListContent;
