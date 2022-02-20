import * as React from "react";
import { CATEGORIES_DATA } from "../_data/categories.data";

function Navbar() {
  return (
    <div
      id="navbar"
      className="pos-md-sticky w-100 justify-content-center align-items-center direction-column direction-md-row d-flex pt-12 pr-12 pl-12 pr-md-24 pl-md-24"
    >
      <div className="h5 p-16 p-md-24 pr-md-0">
        <a id="navbar-home" href="/" className="h-5 p-12 color-light">
          IMROK.fr
        </a>
        <span className="p-16 color-light">·</span>
        <button
          id="navbar-toggle"
          className="d-md-none p-16 bg-unset color-light text-uppercase bo-none"
        >
          Menu ▼
        </button>
      </div>
      {Object.entries(CATEGORIES_DATA).map(([category, { title }]) => (
        <a
          href={`/${category}`}
          key={category}
          className="navbar-category ml-8 color-highbs"
        >
          {title}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
