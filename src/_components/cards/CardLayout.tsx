import * as React from "react";
import ColorsEnum from "../../_enums/colors.enum";
import Tags from "../Tags";

type CardLayoutProps = {
  id: string;
  name?: string;
  tags?: string[];
  title?: string;
  description?: string;
  children?: React.ReactNode;
  bg?: ColorsEnum;
  color?: ColorsEnum;
};

export function getCardClassName({
  name,
  bg,
  color,
}: Pick<CardLayoutProps, "name" | "bg" | "color">) {
  return `card ${name} bg-${bg} color-${color} p-36 p-lg-48 mb-36 mb-lg-48 border-rad-6`;
}

function CardLayout({
  id,
  name,
  tags,
  title,
  description,
  children,
  bg = ColorsEnum.light,
  color = ColorsEnum.dark,
}: CardLayoutProps) {
  return (
    <div id={id} className={getCardClassName({ name, bg, color })}>
      {tags && <Tags tags={tags} />}
      <div className="card__content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
