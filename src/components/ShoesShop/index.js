import React, { Component } from 'react'
import Header from '../Header'
import data from './data.json'
import ProductList from './ProductList';
import Modal from './modal'
export default class ShoesShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: data,
            productDetail: data[0],
            listCart: [],
        };
    }

    setStateModal = (product) => {
        this.setState({ productDetail: product });
    };

    handleDetailProduct = (product) => {
        this.setState({
            productDetail: product
        })
    }
    
    render() {
        const { productDetail } = this.state
        return (
            <div>
                <Header />
                <div>
                    <div className="d-flex">
                        <div className='row col-5 justify-content-center'>
                            <div className='position-fixed m-3 '>
                                <div className="">
                                    <img className="img-fluid" src={productDetail.image} alt="" />
                                </div>
                                <div className="">
                                    <h3>Chi tiết sản phẩm</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{productDetail.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{productDetail.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{productDetail.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{productDetail.shortDescription}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className='col-7'>

                            <ProductList productData={this.state.productData} getDetailProduct={this.handleDetailProduct} setStateModal={this.setStateModal} />

                            <Modal content={productDetail} />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
