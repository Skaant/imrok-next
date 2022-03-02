import * as React from "react";
import COLORS from "../../_enums/colors.enum";
import ExternalContent from "../../_types/content/ExternalContent.type";
import Badge from "../Badge";

export enum FOOTER_DISPLAYS {
  TAGS = "tags",
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
  AUTHOR = "author",
  SOURCE = "source",
}

export type FooterDisplays = {
  [key in FOOTER_DISPLAYS]?: boolean;
};

function ExternalContentLayoutFooter({
  tags,
  createdAt,
  updatedAt,
  author,
  source,
  displays,
}: Pick<
  ExternalContent,
  "tags" | "createdAt" | "updatedAt" | "author" | "source"
> & {
  displays: FooterDisplays;
}) {
  return (
    <div>
      {((displays[FOOTER_DISPLAYS.CREATED_AT] && createdAt) ||
        (displays[FOOTER_DISPLAYS.UPDATED_AT] && updatedAt) ||
        (displays[FOOTER_DISPLAYS.TAGS] && tags && tags.length)) && (
        <div>
          {displays[FOOTER_DISPLAYS.CREATED_AT] && createdAt && (
            <span>Publié le {updatedAt}</span>
          )}
          {displays[FOOTER_DISPLAYS.UPDATED_AT] && updatedAt && (
            <span>Rafraîchi le {updatedAt}</span>
          )}
          {displays[FOOTER_DISPLAYS.TAGS] &&
            tags &&
            tags.map((tag) => <Badge label={tag} background={COLORS.psik} />)}
        </div>
      )}
      {((displays[FOOTER_DISPLAYS.AUTHOR] && author) ||
        (displays[FOOTER_DISPLAYS.SOURCE] && source)) && (
        <div>
          {displays[FOOTER_DISPLAYS.AUTHOR] && author && <i>{author}</i>}
          {displays[FOOTER_DISPLAYS.SOURCE] && source && <span>{source}</span>}
        </div>
      )}
    </div>
  );
}

export default ExternalContentLayoutFooter;
