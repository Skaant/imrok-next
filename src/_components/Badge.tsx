import * as React from "react";
import COLORS from "../_enums/colors.enum";

function Badge({
  label,
  background = COLORS.psik,
  text = COLORS.light,
}: {
  label: string;
  background?: COLORS;
  text?: COLORS;
}) {
  return (
    <span
      className={`bo-rad-24 pl-12 pr-12 pt-6 pb-6 bg-${background} text-${text}`}
    >
      {label}
    </span>
  );
}

export default Badge;
