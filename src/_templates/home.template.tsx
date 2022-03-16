import React from "react";
import { PageProps } from "gatsby";
import RowType from "../_types/layout/Row.type";
import Layout from "../_components/Layout";
import Row from "../_components/Row";

export type HomeTemplateContext = {
  title: string;
  subtitle: string;
  rows?: RowType[];
};

const pageId = "home";

function HomeTemplate({ pageContext }: PageProps<any, HomeTemplateContext>) {
  const { title, subtitle, rows } = pageContext;

  return (
    <Layout>
      <Row id={`${pageId}-title`} className="text-center color-light">
        <>
          <h1 className="title-7 hol-adin mb-0">{title}</h1>
          <p className="font-curvy display-4 mb-36 mb-md-48 color-light-o-75">
            {subtitle}
          </p>
        </>
      </Row>
      {rows && rows.map((row, index) => <Row key={index} {...row} />)}
    </Layout>
  );
}

export default HomeTemplate;
