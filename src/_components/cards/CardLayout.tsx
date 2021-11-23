import * as React from "react";
import Tags from "../Tags";

type CardLayoutProps = {
  id: string;
  tags?: string[];
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

function CardLayout({
  id,
  tags,
  title,
  description,
  children,
}: CardLayoutProps) {
  return (
    <div key={id} id={id} className="card bg-light p-36 p-lg-48 mb-36 mb-lg-48">
      {tags && <Tags tags={tags} />}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export default CardLayout;
