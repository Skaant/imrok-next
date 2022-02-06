import Section from "./Section.type";

/**
 * Cards are meant to be included as an
 *  optional `Row`s child.
 */
type Card = Section & {
  col?: "sm" | "md" | "lg" | "xl";
};

export default Card;
