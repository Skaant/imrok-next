import Card from "./Card.type";
import Section from "./Section.type";

type Row<ContentType = {}> = Section & {
  card?: Card;
} & ContentType;

export default Row;
