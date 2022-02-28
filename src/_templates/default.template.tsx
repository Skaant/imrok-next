import React from "react";
import { PageProps } from "gatsby";
import RowType from "../_types/layout/Row.type";
import Layout from "../_components/Layout";
import Row from "../_components/Row";

export type DefaultTemplateContext = {
  title: string;
  uptitle?: string;
  rows?: RowType[];
  /** The `main.container` optional classes */
  className?: string;
};

function DefaultTemplate({
  pageContext,
}: PageProps<any, DefaultTemplateContext>) {
  const { className, title, rows } = pageContext;

  return (
    <Layout className={className}>
      <Row title={title} level={1} className="col-md color-light text-center" />
      {rows && rows.map((row, index) => <Row key={index} {...row} />)}
    </Layout>
  );
}

export default DefaultTemplate;
