import { ExternalContentLayoutDisplays } from "../../_components/ExternalContentLayout/ExternalContentLayout";
import Content from "../content/Content.type";
import SectionCol from "./SectionCol.type";

export type SectionContent = Content | undefined;

type Section<ContentType extends SectionContent = Content> = {
  id?: string;
  title?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  content?: ContentType;
  background?: string;
  color?: string;
  className?: string;
  col?: SectionCol;
  /** For code-use only (not queried content). */
  displays?: ExternalContentLayoutDisplays;
};

export default Section;

export const SectionFields = [
  "id",
  "title",
  "level",
  // "content", ;)
  "background",
  "color",
  "className",
  "col",
];
