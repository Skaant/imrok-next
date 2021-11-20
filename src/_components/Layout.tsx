import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import NodeItem from "../_helpers/models/nodeItem.model";

import "../_styles/global.scss";
import Cards from "./Cards";
import Navbar from "./Navbar";

export type LayoutProps = {
  cards?: NodeItem[];
};

function Layout({ cards }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Cards cards={cards} />
    </>
  );
}

export default Layout;
