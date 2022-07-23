import React from "react";

function NavBar({ productCount }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand h1">
          Navbar
          {/* Badge will only show amount of products with values >0 */}
          <span className="badge rounded-pill bg-secondary ms-2">
            {productCount}
          </span>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
