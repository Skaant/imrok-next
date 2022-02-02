import React from "react";
import { PageProps } from "gatsby";
import Layout from "../_components/Layout";
import NodeItem from "../_models/nodes/node-item.model";
import Cards from "../_components/Cards";
import SpecialCard from "../_models/cards/special-card.model";

export type DefaultTemplateContext = {
  title?: string;
  uptitle?: string;
  cards: Array<NodeItem | SpecialCard>;
};

function DefaultTemplate({
  pageContext,
}: PageProps<any, DefaultTemplateContext>) {
  const { title } = pageContext;

  return (
    <Layout>
      {title && <h1 className="color-light text-center">{title}</h1>}
    </Layout>
  );
}

export default DefaultTemplate;
