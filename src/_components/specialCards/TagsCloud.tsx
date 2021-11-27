import React from "react";
import ColorsEnum from "../../_enums/colors.enum";
import SpecialCardsEnum from "../../_enums/special-cards.enum";
import SpecialCard from "../../_models/special-card.model";
import CardLayout from "../cards/CardLayout";
import Tags from "../Tags";

export type TagsCloudCardSpecialProps = {
  tags: string[];
};

export type TagsCloudCardProps = Pick<
  SpecialCard,
  "id" | "title" | "description"
> &
  TagsCloudCardSpecialProps;

function TagsCloudCard({ id, title, description, tags }: TagsCloudCardProps) {
  return (
    <CardLayout
      id={id}
      name={SpecialCardsEnum.tags_cloud}
      title={title}
      description={description}
      bg={ColorsEnum.primary}
      color={ColorsEnum.light}
    >
      <Tags
        tags={tags}
        justifyContent="start"
        bg={ColorsEnum.light}
        color={ColorsEnum.dark}
      />
    </CardLayout>
  );
}

export default TagsCloudCard;
