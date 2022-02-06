import React from "react";
import { PageProps } from "gatsby";
import Layout from "../_components/Layout";
import RowType from "../_models/layout/Row.type";
import Row from "../_components/Row/Row";

export type DefaultTemplateContext = {
  title: string;
  uptitle?: string;
  rows?: RowType[];
};

function DefaultTemplate({
  pageContext,
}: PageProps<any, DefaultTemplateContext>) {
  const { title, rows } = pageContext;

  return (
    <Layout>
      {title && <h1 className="color-light text-center">{title}</h1>}
      {rows && rows.map((row, index) => <Row key={index} {...row} />)}
    </Layout>
  );
}

export default DefaultTemplate;
