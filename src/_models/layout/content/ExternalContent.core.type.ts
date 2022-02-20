import ContentCore from "./Content.core.type";

type ExternalContentCore = ContentCore & {
  _id: string;
};

export default ExternalContentCore;
