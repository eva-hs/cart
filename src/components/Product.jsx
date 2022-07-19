import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, product } = this.props;
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          onClick={() => onIncrement(product)}
          className="btn btn-primary"
        >
          Increment
        </button>
        {/* Knappen ska endast synas om värdet quantity
        på just den raden är större än 0 */}
        <span>{this.formatDecrementButton(product)}</span>
        <button
          onClick={() => onDelete(product.id)}
          className="btn btn-danger ms-2"
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }
  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
  formatDecrementButton(product) {
    // Jag använder this.props 2 gånger,
    // men ena är från this.props och andra från this.props.product,
    // så jag förenklar inte det.
    return (
      this.props.product.quantity > 0 && (
        <button
          onClick={() => this.props.onDecrement(product)}
          className="btn btn-primary ms-2"
        >
          Decrement
        </button>
      )
    );
  }
}

export default Product;
