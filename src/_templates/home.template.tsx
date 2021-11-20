import React from "react";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../_components/Layout";
import HomeTemplateContext from "../_helpers/models/templateContext/home.model";

function HomeTemplate({ pageContext }: PageProps<any, HomeTemplateContext>) {
  const { cards } = pageContext;

  return (
    <Layout cards={cards}></Layout>
  );
}

export default HomeTemplate;
