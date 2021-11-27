import React from "react";
import ReactMarkdown from "react-markdown";
import ColorsEnum from "../../_enums/colors.enum";
import SpecialCardsEnum from "../../_enums/special-cards.enum";
import SpecialCardCore from "../../_models/cards/special-card-core.model";
import { getCardClassName } from "../cards/CardLayout";

export type CallToActionCardSpecialProps = { url: string; label?: string };

export type CallToActionCardProps = Pick<
  SpecialCardCore,
  "id" | "title" | "description"
> &
  CallToActionCardSpecialProps;

function CallToActionCard({
  id,
  url,
  title,
  description,
  label,
}: CallToActionCardProps) {
  return (
    <a
      id={id}
      href={url}
      className={
        getCardClassName({
          name: SpecialCardsEnum.call_to_action,
          bg: ColorsEnum.secondary,
          color: ColorsEnum.dark,
        }) + " d-block"
      }
    >
      {title && <h2>{title}</h2>}
      {description && <ReactMarkdown>{description}</ReactMarkdown>}
      {label && <p>{label}</p>}
    </a>
  );
}

export default CallToActionCard;
