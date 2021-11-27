/** NodeItemCore is the generic type of GraphQL MDX items.
 *
 * It is used as intersection with other node types (in `./_types` folder),
 *  which are then grouped in NodeItem union.
 */
type NodeItemCore = {
  id: string;
  frontmatter: object;
  body: any;
};

export default NodeItemCore;
