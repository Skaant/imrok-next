import Section, { SectionContent, SectionFields } from "./Section.type";

/**
 * `Row` cannot hold both `card` and
 *  `content` props.
 *
 * In component, card will be rendered in
 *  place of `content` if given.
 *
 * That's partly why `CardContentType` is
 *  `undefined` by default.
 */
type Row<
  RowContentType extends SectionContent = SectionContent,
  CardContentType extends SectionContent = undefined
> = Section<RowContentType> & {
  card?: Section<CardContentType>;
};

export default Row;

export const RowFields = [
  `row { ${SectionFields.join(" ")} }`,
  `card { ${SectionFields.join(" ")} }`,
];
