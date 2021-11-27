# imrok-next

`imrok-next` is the [`imrok.fr`](https://imrok.fr) new website, built on Gatsby.

## Quick start

Navigate into your new site’s directory and start it up.

```shell
cd my-gatsby-site/
npm run develop
```

## Glossary and types

### Page & cards

Pages are made of a collection of cards.

Cards can be either node-driven, [instances of a node type](#node--types), or speciality-driven, [instances of a special cards](#special-cards)

### Node & types

`NodeItem` is the generic data retrieved by GraphQL and displayed atomically inside cards.

Types are derivated from `NodeItem` through `NodeTypesEnum`, having special props.

### Special cards

Special card holds a `SpecialCardEnum` type and its props.

## Patterns

- node, node types,
- card, special cards,
- _model,_ [model] core,
- _components_,
- _enum_ ...
