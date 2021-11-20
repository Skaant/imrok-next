import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Tags from "./Tags";

function Cards({ cards }) {
  return (
    <div className="cards mt-48 mt-lg-64 mr-auto ml-auto pl-12 pl-lg-24 pr-12 pr-lg-24">
      {cards.map((card) => (
        <div
          key={card.id}
          id={card.frontmatter.id}
          className="card bg-light p-36 p-lg-48 mb-36 mb-lg-48"
        >
          <Tags tags={card.frontmatter.tags} />
          <h2>{card.frontmatter.title}</h2>
          <MDXRenderer>{card.body}</MDXRenderer>
        </div>
      ))}
    </div>
  );
}

export default Cards;
