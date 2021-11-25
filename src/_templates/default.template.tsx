import React from "react";
import { PageProps } from "gatsby";
import Layout from "../_components/Layout";
import NodeItem from "../_models/node-item.model";
import Cards from "../_components/Cards";
import SpecialCard from "../_models/special-card.model";

export type DefaultTemplateContext = {
  title?: string;
  uptitle?: string;
  cards: Array<NodeItem | SpecialCard>;
};

function DefaultTemplate({
  pageContext,
}: PageProps<any, DefaultTemplateContext>) {
  const { uptitle, title, cards } = pageContext;

  return (
    <Layout>
      {title &&
        (uptitle ? (
          <>
            <p className="size-2 color-light text-center mt-48 mb-0">
              {uptitle}
            </p>
            <h1 className="color-light text-center mt-0">{title}</h1>
          </>
        ) : (
          <h1 className="color-light text-center">{title}</h1>
        ))}
      <Cards cards={cards} />
    </Layout>
  );
}

export default DefaultTemplate;
