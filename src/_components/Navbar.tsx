import * as React from "react";

function Navbar() {
  return (
    <div id="navbar" className="pos-sticky w-100">
      <div id="navbar__menu" className="d-none"></div>
      <div id="navbar__btns" className="w-max ml-auto mr-auto">
        <a href="/">IMROK</a>
        <button>Menu</button>
      </div>
    </div>
  );
}

export default Navbar;
