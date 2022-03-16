import React from "react";
import LinksListContentType from "../../_types/content/_internalContents/LinksListContent.type";
import Badge from "../Badge";
import Section from "../../_types/layout/Section.type";
import RowOrCardLayout, { RowOrCard } from "../RowOrCardLayout";
import COLORS from "../../_enums/colors.enum";

function LinksListContent(
  props: Section<LinksListContentType> & {
    target: RowOrCard;
  }
) {
  const {
    content: { links, color = COLORS.dark },
  } = props;
  return (
    <RowOrCardLayout {...props}>
      <>
        <ul>
          {links.map(({ url, label, date, category, tags, type }) => (
            <li key={url}>
              <a href={url} className={`color-${color}`}>
                <span className="d-inline-block mb-12">{label}</span>
                {category && (
                  <Badge
                    label={category}
                    background={COLORS.highbs}
                    color={COLORS.dark}
                    className="ml-8 display-8"
                  />
                )}
                {date && (
                  <Badge
                    label={date}
                    background={COLORS.light}
                    color={COLORS.dark}
                    className="ml-8 display-8"
                  />
                )}
                {type && (
                  <Badge
                    label={type}
                    background={COLORS.highbs}
                    color={COLORS.dark}
                    className="ml-8 display-8"
                  />
                )}
                {tags &&
                  tags.map((tag) => (
                    <Badge
                      key={tag}
                      label={tag}
                      background={COLORS.light}
                      color={COLORS.psik}
                      className="ml-8 display-8"
                    />
                  ))}
              </a>
            </li>
          ))}
        </ul>
      </>
    </RowOrCardLayout>
  );
}

export default LinksListContent;
