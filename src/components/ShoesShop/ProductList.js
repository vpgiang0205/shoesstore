import React, { Component } from 'react';
import ProductItem from './ProductItem';
export default class ProductList extends Component {
  renderListProduct = () => {
    const { productData, getDetailProduct, getAddToCart, setStateModal } = this.props;
    return productData.map((product) => {
      return <ProductItem key={product.id} product={product} getDetailProduct={getDetailProduct} getAddToCart={getAddToCart} setStateModal ={setStateModal}/>
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>

    )
  }
}
