import * as React from "react";
import COLORS from "../_enums/colors.enum";

function Badge({
  label,
  background = COLORS.psik,
  color = COLORS.light,
  className,
}: {
  label: string;
  background?: COLORS;
  color?: COLORS;
  className?: string;
}) {
  return (
    <span
      className={`bo-rad-24 pl-12 pr-12 pt-6 pb-6 bg-${background} color-${color} d-inline-block mb-8 ${
        className || ""
      }`}
    >
      {label}
    </span>
  );
}

export default Badge;
