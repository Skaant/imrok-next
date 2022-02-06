import Card from "./Card.type";
import Section from "./Section.type";

type Row = Section & {
  card?: Card;
};

export default Row;
