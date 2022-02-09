import React from "react";

import "../_styles/global.scss";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ className, children }: LayoutProps) {
  return (
    <div className={className}>
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
