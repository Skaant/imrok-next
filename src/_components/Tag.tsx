import * as React from "react";
import COLORS from "../_enums/colors.enum";

function Tag({
  tag,
  background = COLORS.psik,
  text = COLORS.light,
}: {
  tag: string;
  background?: COLORS;
  text?: COLORS;
}) {
  return (
    <span
      className={`bo-rad-24 pl-12 pr-12 pt-6 pb-6 bg-${background} text-${text}`}
    >
      {tag}
    </span>
  );
}

export default Tag;
