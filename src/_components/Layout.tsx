import React from "react";

import "../_styles/global.scss";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
