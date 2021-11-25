import * as React from "react";
import ColorsEnum from "../_enums/colors.enum";

type TagsProps = {
  tags: string[];
  justifyContent?: "end" | "start";
  bg?: ColorsEnum;
  color?: ColorsEnum;
};

function Tags({
  tags,
  justifyContent = "end",
  bg = ColorsEnum.primary,
  color = ColorsEnum.light,
}: TagsProps) {
  return (
    <div
      className={`tags d-flex justify-content-${justifyContent} ${
        justifyContent === "end" ? "mb-36" : "mt-36"
      }`}
    >
      {tags.map((tag) => (
        <a
          key={tag}
          href={`/tags/${tag}`}
          className={`tag bg-${bg} color-${color} d-block w-max ${
            justifyContent === "end" ? "ml-8" : "mr-8"
          } pr-12 pl-12 pt-6 pb-6`}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

export default Tags;
