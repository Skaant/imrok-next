import * as React from "react";
import ImageContentType from "../../../../_models/layout/content/_types/Image.content.type";

function ImageContent({ url, alt, legend }: ImageContentType) {
  return (
    <div className="image-content">
      <img src={url} alt={alt} />
      {legend && <p>{legend}</p>}
    </div>
  );
}

export default ImageContent;
