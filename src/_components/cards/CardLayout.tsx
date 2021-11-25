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
    <div
      id={id}
      className={`card ${name} bg-${bg} color-${color} p-36 p-lg-48 mb-36 mb-lg-48`}
    >
      {tags && <Tags tags={tags} />}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export default CardLayout;
