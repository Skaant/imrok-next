import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import NodeItem from "../_helpers/models/nodeItem.model";

import "../_styles/global.scss";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
