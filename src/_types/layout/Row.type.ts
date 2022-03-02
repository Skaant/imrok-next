import Section, { SectionContent, SectionFields } from "./Section.type";

type Row<
  RowContentType extends SectionContent = SectionContent,
  ColContentType extends SectionContent = SectionContent
> = Section<RowContentType> & {
  card?: Section<ColContentType>;
};

export default Row;

export const RowFields = [
  `row { ${SectionFields.join(" ")} }`,
  `card { ${SectionFields.join(" ")} }`,
];
