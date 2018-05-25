import React, { Component } from 'react';
import axios from 'axios';
import Product from '../../component/product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(val){
        axios.delete(`/api/product/${val}`).then (this.props.getInventory());
        this.props.getInventory();
    }

    render() {
        return (
            <div>
                Dashboard
                {
                    this.props.products.map( product => (
                        <Product 
                            id={product.product_id} 
                            key={product.product_id} 
                            name={product.name} 
                            imageURL={product.image_url} 
                            price={product.price}
                            deleteProduct={this.deleteProduct}
                        />
                    ))
                }
            </div> 
        )
    }
}