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
    // Change on multiple proucts
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  handleIncrement = (product) => {
    // Change on one product
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    // Change on one product
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  };

  productCountBadge() {
    const productCount = this.state.products.filter(
      (product) => product.quantity !== 0
    );
    return productCount.length;
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar productCount={this.productCountBadge()} />
        <Products
          products={products}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </>
    );
  }
}

export default App;
