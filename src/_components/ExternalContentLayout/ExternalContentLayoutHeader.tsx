import * as React from "react";
import COLORS from "../../_enums/colors.enum";
import ExternalContent from "../../_types/content/ExternalContent.type";
import Badge from "../Badge";

export enum HEADER_DISPLAYS {
  CATEGORY = "category",
  TYPE = "type",
  TITLE = "title",
}

export type HeaderDisplays = {
  [key in HEADER_DISPLAYS]?: any;
};

function ExternalContentLayoutHeader({
  category,
  type,
  title,
  displays,
}: Pick<ExternalContent, "category" | "type" | "title"> & {
  displays: HeaderDisplays;
}) {
  const condition1 =
    (displays[HEADER_DISPLAYS.CATEGORY] && category) ||
    displays[HEADER_DISPLAYS.TYPE];
  return condition1 || displays[HEADER_DISPLAYS.TITLE] ? (
    <div>
      {condition1 && (
        <div>
          {category && displays[HEADER_DISPLAYS.CATEGORY] && (
            <Badge label={category} background={COLORS.psik} />
          )}
          {displays[HEADER_DISPLAYS.TYPE] && (
            <Badge label={type} background={COLORS.light} />
          )}
        </div>
      )}
      {displays[HEADER_DISPLAYS.TITLE] && <div>{title}</div>}
    </div>
  ) : null;
}

export default ExternalContentLayoutHeader;
