import * as React from "react";
import { CATEGORIES_DATA } from "../_data/categories.data";

function Navbar() {
  return (
    <div
      id="navbar"
      className="pos-md-sticky w-100 justify-content-center align-items-center direction-column direction-md-row d-flex pt-12 pr-12 pl-12 pr-md-24 pl-md-24"
    >
      <a
        href="/"
        className="h-5 color-light pt-12 pb-12 pl-12 pr-12 color-light"
      >
        IMROK.fr
      </a>
      {Object.entries(CATEGORIES_DATA).map(([category, { title }]) => (
        <a
          href={`/${category}`}
          key={category}
          className="ml-8 color-secondary pt-12 pb-12 pl-12 pr-12 color-highbs"
        >
          {title}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
