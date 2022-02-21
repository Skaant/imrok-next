import * as React from "react";
import ImageContent from "../../_types/content/_externalContents/ImageContent.type";

function ImageContentRow({ url, alt, legend }: ImageContent) {
  return (
    <div className="image-content">
      <img src={url} alt={alt} />
      {legend && <p>{legend}</p>}
    </div>
  );
}

export default ImageContentRow;
