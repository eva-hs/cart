import React, { Component } from "react";
// import ListGroup from "./ListGroup";
// import Pagination from "./Pagination";
// import NavBar from "./NavBar";
// import Table from "./Table";
import Product from "./Product";

class App extends Component {
  // getName() {
  //   console.log("Eva");
  // }

  // success() {
  //   console.log("yeehaw! Det funkade :)");
  // }

  render() {
    return (
      <>
        {/* <h1>
          <NavBar />
        </h1> */}
        <p>Hej, jag heter Eva</p>
        <Product />
        {/* <button className="btn btn-primary" onClick={this.getName}>
          Klicka först på mig
        </button>

        <p></p>
        <button
          type="button"
          className="btn btn-outline-success"
          onMouseOver={this.success}
        >
          Håll sen muspekaren på mig
        </button>

        <p></p>
        <p>List Group ligger som en egen component</p>
        <ListGroup />

        <p></p>
        <p>Pagination ligger som en annan komponent och är klickbara länkar</p>
        <Pagination />

        <p></p>
        <p>Tables ligger som ytterligare en component</p>
        <Table /> */}
      </>
    );
  }
}

export default App;
