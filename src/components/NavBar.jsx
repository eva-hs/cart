import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            Navbar
            {/* Badgen ska endast visa antal produkter som inte är 0 */}
            <span>{this.formatProductCountBadge(this.props.productCount)}</span>
          </span>
        </div>
      </nav>
    );
  }

  formatProductCountBadge(productCount) {
    return (
      productCount > 0 && (
        <span className="badge rounded-pill bg-secondary ms-2">
          {productCount}
        </span>
      )
    );
  }
}

export default NavBar;
