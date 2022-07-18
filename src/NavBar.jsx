import React, { Component } from "react";
import Welcome from "./Welcome";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              <Welcome /> <span className="badge bg-secondary">Se hit!</span>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
