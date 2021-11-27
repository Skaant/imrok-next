import React from "react";
import ColorsEnum from "../../_enums/colors.enum";
import SpecialCardsEnum from "../../_enums/special-cards.enum";
import SpecialCardCore from "../../_models/cards/special-card-core.model";
import CardLayout from "../cards/CardLayout";

export type LinksListCardSpecialProps = {
  links: Array<{ url: string; label: string }>;
};

export type LinksListCardProps = Pick<
  SpecialCardCore,
  "id" | "title" | "description"
> &
  LinksListCardSpecialProps;

function LinksListCard({ id, title, description, links }: LinksListCardProps) {
  return (
    <CardLayout
      id={id}
      name={SpecialCardsEnum.links_list}
      title={title}
      description={description}
      bg={ColorsEnum.primary}
      color={ColorsEnum.light}
    >
      <div className="bg-light border-rad-4 mt-36">
        {links.map(({ url, label }) => (
          <a
            href={url}
            className="d-block text-center text-uppercase color-dark p-16 p-md-24"
          >
            {label}
          </a>
        ))}
      </div>
    </CardLayout>
  );
}

export default LinksListCard;
