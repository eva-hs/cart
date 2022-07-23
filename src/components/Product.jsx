import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onDelete, onIncrement, product } = this.props;
    return (
      <div className="row m-2">
        {/* Lagt fast bredd på columnen samt padding till 0 för att texten
                ska bli vänsterställd */}
        <div className="col-1 p-0">
          <span className={this.getBadgeClasses()}>
            {this.formatQuantity()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-secondary"
          >
            +
          </button>
          {/* Button will only be active if quantity is > 0.*/}
          <span>
            <button
              onClick={() => this.props.onDecrement(product)}
              className="btn btn-secondary mx-2"
              disabled={product.quantity === 0}
            >
              -
            </button>
          </span>
          <button
            onClick={() => onDelete(product.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }
  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
}

export default Product;
