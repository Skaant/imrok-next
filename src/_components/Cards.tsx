import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import SpecialCardsEnum from "../_enums/special-cards.enum";
import NodeItem from "../_models/node-item.model";
import BaseNode from "../_models/nodeTypes/base-node.model";
import SpecialCard from "../_models/special-card.model";
import CardLayout from "./cards/CardLayout";
import CallToActionCard, {
  CallToActionCardSpecialProps,
} from "./specialCards/CallToAction";
import LinksListCard, {
  LinksListCardSpecialProps,
} from "./specialCards/LinksList";
import TagsCloudCard, {
  TagsCloudCardSpecialProps,
} from "./specialCards/TagsCloud";

function Cards({ cards }: { cards: Array<NodeItem | SpecialCard> }) {
  return (
    <div className="cards mt-48 mt-lg-64 mr-auto ml-auto pl-12 pl-lg-24 pr-12 pr-lg-24">
      {cards.map((card, index) => {
        if (card.hasOwnProperty("type")) {
          card = card as SpecialCard;
          switch (card.type) {
            case SpecialCardsEnum.call_to_action:
              const { url, label } = card.props as CallToActionCardSpecialProps;
              return (
                <CallToActionCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  url={url}
                  label={label}
                  description={card.description}
                />
              );
            case SpecialCardsEnum.tags_cloud:
              const { tags } = card.props as TagsCloudCardSpecialProps;
              return (
                <TagsCloudCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tags={tags}
                />
              );
            case SpecialCardsEnum.links_list:
              const { links } = card.props as LinksListCardSpecialProps;
              return (
                <LinksListCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  links={links}
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
