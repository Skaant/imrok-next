import * as React from "react";

function Navbar() {
  return (
    <div id="navbar" className="pos-sticky w-100">
      <div id="navbar__menu" className="d-none"></div>
      <div
        id="navbar__btns"
        className="bg-light w-max ml-auto mr-auto p-12 p-lg-16"
      >
        <a href="/">IMROK</a>
        {/** <button>Menu</button> */}
      </div>
    </div>
  );
}

export default Navbar;
