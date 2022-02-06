import Content from "./content/Content.type";

type Section = {
  title?: string;
  level?: 2 | 3 | 4 | 5 | 6;
  content?: Content;
  background?: string;
  color?: string;
  className?: string;
};

export default Section;
