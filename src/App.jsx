import React, { Component } from "react";
import Products from "./components/Products";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 8 },
      { id: 4, quantity: 11 },
    ],
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  handleReset = () => {
    // Ändra på flera produkter
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  handleIncrement = (product) => {
    // Ändra på 1 produkt
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar productCount={products.length} />
        <Products
          products={products}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
        />
      </>
    );
  }
}

export default App;
