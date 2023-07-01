import React, { Component } from 'react'
import Header from '../Header'
import data from './data.json'
import ProductList from './ProductList';
export default class ShoesShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: data,
        };
    }

    handleDetailProduct = (product) =>{
        console.log(product)
    }
    render() {
        return (
            <div>
                <Header />
                <ProductList productData = {this.state.productData} getDetailProduct= {this.handleDetailProduct}/>
            </div>
        )
    }
}
