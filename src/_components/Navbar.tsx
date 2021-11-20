import * as React from "react";

function Navbar() {
  return (
    <div id="navbar" className="pos-sticky w-100">
      <div id="navbar__menu" className="d-none"></div>
      <div
        id="navbar__btns"
        className="bg-primary color-white w-max ml-auto mr-auto pr-24 pr-lg-36 pl-24 pl-lg-36 pt-12 pb-12"
      >
        <a href="/">IMROK</a>
        {/** <button>Menu</button> */}
      </div>
    </div>
  );
}

export default Navbar;
