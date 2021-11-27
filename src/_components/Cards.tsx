import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import SpecialCardsEnum from "../_enums/special-cards.enum";
import NodeItem from "../_models/nodes/node-item.model";
import BaseNode from "../_models/nodes/_types/base-node.model";
import SpecialCard from "../_models/cards/special-card.model";
import CardLayout from "./cards/CardLayout";
import CallToActionCard, {
  CallToActionCardProps,
} from "./specialCards/CallToAction";
import LinksListCard, { LinksListCardProps } from "./specialCards/LinksList";
import TagsCloudCard, { TagsCloudCardProps } from "./specialCards/TagsCloud";

function Cards({ cards }: { cards: Array<NodeItem | SpecialCard> }) {
  return (
    <div className="cards mt-48 mt-lg-64 mr-auto ml-auto pl-12 pl-lg-24 pr-12 pr-lg-24">
      {cards.map((card) => {
        if (card.hasOwnProperty("type")) {
          switch (card["type"]) {
            case SpecialCardsEnum.call_to_action:
              card = card as CallToActionCardProps;
              return (
                <CallToActionCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  url={card.url}
                  label={card.label}
                  description={card.description}
                />
              );
            case SpecialCardsEnum.tags_cloud:
              card = card as TagsCloudCardProps;
              return (
                <TagsCloudCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                />
              );
            case SpecialCardsEnum.links_list:
              card = card as LinksListCardProps;
              return (
                <LinksListCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  links={card.links}
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
