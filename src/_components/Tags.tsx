import * as React from "react";

function Tags({ tags }) {
  return (
    <div className="tags d-flex justify-content-end mb-36">
      {tags.map((tag) => (
        <a
          key={tag}
          href={`/tags/${tag}`}
          className="tag bg-primary color-white color-light d-block w-max pr-12 pl-12 pt-6 pb-6"
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

export default Tags;
