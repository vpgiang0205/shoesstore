import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { product, getDetailProduct } = this.props
        return (
            <div className=" col-4 p-3  d-flex flexwrap">
                <div className="card h-100  text-left">
                    <img className="card-img-top" src={product.image} alt="" />
                    <h4 id="name" className="card-title">{product.name}</h4>
                    <p id="price" className="card-text">{product.price}</p>
                    <div className="card-bottom p-3">
                        <button className="btn btn-dark" onClick={() => {
                            getDetailProduct(product)
                        }} >Detail</button>
                    </div>
                </div>
            </div>

        )
    }
}
