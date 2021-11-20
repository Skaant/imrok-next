import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

function Cards({ cards }) {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div
          key={card.id}
          id={card.frontmatter.id}
          className={`card ${index ? "" : "show"}`}
        >
          {card.frontmatter.title}
          <MDXRenderer>{card.body}</MDXRenderer>
        </div>
      ))}
    </div>
  );
}

export default Cards;
