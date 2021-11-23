import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import SpecialCardsEnum from "../_enums/special-cards.enum";
import NodeItem from "../_models/node-item.model";
import BaseNode from "../_models/nodeTypes/base-node.model";
import SpecialCard from "../_models/special-card.model";
import CardLayout from "./cards/CardLayout";
import TagsCloudCard, { TagsCloudCardProps } from "./specialCards/TagsCloud";

function Cards({ cards }: { cards: Array<NodeItem | SpecialCard> }) {
  return (
    <div className="cards mt-48 mt-lg-64 mr-auto ml-auto pl-12 pl-lg-24 pr-12 pr-lg-24">
      {cards.map((card, index) => {
        if (card.hasOwnProperty("type")) {
          card = card as SpecialCard;
          switch (card.type) {
            case SpecialCardsEnum.tags_cloud:
              const { tags } = card.props as TagsCloudCardProps;
              return (
                <TagsCloudCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tags={tags}
                />
              );
          }
        } else {
          card = card as BaseNode;
          return (
            <CardLayout
              key={card.frontmatter.id}
              id={card.frontmatter.id}
              tags={card.frontmatter.tags}
              title={card.frontmatter.title}
            >
              <MDXRenderer>{card.body}</MDXRenderer>
            </CardLayout>
          );
        }
      })}
    </div>
  );
}

export default Cards;
