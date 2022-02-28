import * as React from "react";
import { CATEGORIES_DATA } from "../_data/categories.data";

function Navbar() {
  return (
    <div
      id="navbar"
      className="pos-lg-sticky w-100 justify-content-center align-items-center direction-column direction-lg-row d-flex pt-12 pr-12 pl-12 pr-lg-24 pl-lg-24"
    >
      <div className="h5 p-16 p-lg-24 pr-lg-0">
        <a id="navbar-home" href="/" className="h-5 p-12 color-light hol-adin">
          IMROK
        </a>
        <span className="p-16 color-light">·</span>
        <button
          id="navbar-toggle"
          className="d-lg-none p-16 bg-unset color-light text-uppercase bo-none"
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
