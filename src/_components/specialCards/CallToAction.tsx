import React from "react";
import ColorsEnum from "../../_enums/colors.enum";
import SpecialCardsEnum from "../../_enums/special-cards.enum";
import CardLayout from "../cards/CardLayout";

export type CallToActionCardProps = {
  id: string;
  url: string;
  title: string;
  description?: string;
};

function CallToActionCard({
  id,
  url,
  title,
  description,
}: CallToActionCardProps) {
  return (
    <a
      id={id}
      href={url}
      className={`card ${SpecialCardsEnum.call_to_action} d-block bg-${ColorsEnum.secondary} color-${ColorsEnum.dark} p-36 p-lg-48 mb-36 mb-lg-48`}
    >
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </a>
  );
}

export default CallToActionCard;
