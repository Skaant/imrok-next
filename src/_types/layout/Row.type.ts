import Card from "./Card.type";
import Section, { SectionFields } from "./Section.type";

type Row<ContentType = {}> = Section & {
  card?: Card;
} & ContentType;

export default Row;

export const RowFields = SectionFields;
// [...SectionFields, "card"];
