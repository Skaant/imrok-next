import * as React from "react";

type TagsProps = {
  tags: string[];
  justifyContent?: "end" | "start";
};

function Tags({ tags, justifyContent = "end" }: TagsProps) {
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
          className={`tag bg-primary color-white color-light d-block w-max ${
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
