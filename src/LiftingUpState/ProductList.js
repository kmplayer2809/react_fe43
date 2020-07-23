import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderProList = () => {
    console.log(this.props.proList);
    return this.props.proList.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product
            handleSelectedPro={this.props.handleSelectedPro}
            item={item}
            handleBuy={this.props.handleBuy}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProList()}</div>;
  }
}
