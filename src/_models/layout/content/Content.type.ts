import { ReactNode } from "react";
import ImageContent from "./_types/Image.content.type";
import VideoContent from "./_types/Video.content.type";

type Content = string | ReactNode | ImageContent | VideoContent;

export default Content;
