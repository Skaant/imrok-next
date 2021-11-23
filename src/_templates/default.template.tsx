import React from "react";
import { PageProps } from "gatsby";
import Layout from "../_components/Layout";
import NodeItem from "../_models/node-item.model";
import Cards from "../_components/Cards";
import SpecialCard from "../_models/special-card.model";

export type DefaultTemplateContext = {
  title?: string;
  subtitle?: string;
  cards: Array<NodeItem | SpecialCard>;
};

function DefaultTemplate({
  pageContext,
}: PageProps<any, DefaultTemplateContext>) {
  const { title, subtitle, cards } = pageContext;

  return (
    <Layout>
      {title && <h1 className="color-light text-center">{title}</h1>}
      {title && subtitle && (
        <>
          <h1 className="color-light text-center mb-0">{title}</h1>
          <p className="color-light mb-36">{subtitle}</p>
        </>
      )}
      <Cards cards={cards} />
    </Layout>
  );
}

export default DefaultTemplate;
