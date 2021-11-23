import React from "react";

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
