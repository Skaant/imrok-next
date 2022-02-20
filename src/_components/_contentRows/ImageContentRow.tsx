import * as React from "react";
import ImageContent from "../../_models/layout/content/_types/Image.content.type";

function ImageContentRow({ url, alt, legend }: ImageContent) {
  return (
    <div className="image-content">
      <img src={url} alt={alt} />
      {legend && <p>{legend}</p>}
    </div>
  );
}

export default ImageContentRow;
