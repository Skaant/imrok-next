# imrok-next

`imrok-next` is the **new version of [IMROK.fr](https://imrok.fr)**, my ([@Skaant](https://github.com/Skaant)) creative website.

It is built on **[Gatsby](https://www.gatsbyjs.com)**, a Typescript-ready **static website generator**.

## Quick start

See your **changes live** with the local development server :

```bash
# Install dependencies
npm i
# Run the website localy
npm start
```

## Concepts

**Workflow** described here is implemented by [`./gatsby-node.ts`](../../tree/main/gatsby-node.ts).

### Data layer - Queries, Nodes

Data can be stored as :

* **MDX files** for components and editorial content (in `./_data` folder),
* **Code** for workflow use and display :

  * **Enums** (in [`./src/_enums`](../../tree/main/src/_enums) folder),
  * **Constants** (in [`./src/_data`](../../tree/main/src/_data) folder),
  * Static and re-usable page **nodes**,
* **Static files** (in [`./static`](../../tree/main/static) folder).

MDX files are gathered in `gatsby-node` **through [queries](#query), as [nodes](#node) objects**.

#### [Query](#query)

Multiple queries has been defined in [`./src/_queries`](../../tree/main/src/_queries) to **gather nodes conditionally** (file path, category, tags ...).

#### [Node](#node)

**A page is built on multiple nodes content.**

**Nodes hold properties** (like title, date, category, tags ...) which can be either used as :

* **Conditions in queries**,
* **Conditions in controller**,
* Content **displayed in UI**.

These properties **are set** through :

* GraphQL, with **MDX files metadata**,
* Frontmatter, **at the top of MDX files**.

### Controller layer

The controller layer **creates the website's tree** structure.

It fetches data, **iterates** through it and **provision templates**.

#### [Route](#route)

Representing url node, route **group a ressource and its sub-routes**.

### Display layer

#### [Component](#component)

React components are ultimately **pieces of static HTML files**.

**They build pages**, from layout (meta, navbar ...) to grid (container, rows) and smaller components (buttons, cards ...).

#### [Template](#template)

Templates render to **one or multiple pages**.

It is made of **a container and multiple rows**, which are filled with props data.

#### [Row](#row)

A row is a **structural component which specializes** for specific display (ex: editorial content, links list ...). 

## Patterns

- node, node types,
- page, row, row types,
- _model,_ [model] core,
- _components_,
- _enum_ ...
