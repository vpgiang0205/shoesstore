import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        const { product, getDetailProduct, setStateModal } = this.props
        return (
            <div className=" col-4 p-3  d-flex flexwrap">
                <div className="card px-2 text-left">
                    <img className="card-img-top" src={product.image} alt="" />
                    <div className='card-body'>
                        <h4 id="name" className="card-title">{product.name}</h4>
                    </div>
                    <div className='card-footer bg-white border-0'>
                        <p id="price" className="card-text">{product.price}</p>

                        <button className="btn btn-danger mr-2" onClick={() => {
                            getDetailProduct(product)
                        }} >View</button>

                        <button className="btn btn-dark" data-toggle="modal" data-target="#modelId" onClick={() => {
                            setStateModal(product)
                        }} >Full Detail</button>
                    </div>
                </div>

            </div>

        )
    }
}
