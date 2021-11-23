/** NodeItem is the generic type of GraphQL MDX items. */
type NodeItem = {
  id: string;
  frontmatter: object;
  body: any;
};

export default NodeItem;
