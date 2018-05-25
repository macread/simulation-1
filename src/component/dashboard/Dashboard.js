import React, { Component } from 'react';
import Product from '../../component/product/Product'

export default class Dashboard extends Component {


    render() {
        return (
            <div>
                Dashboard
                {
                    this.props.products.map( product => (
                        <Product 
                            id={product.id} 
                            key={product.id} 
                            name={product.name} 
                            imageURL={product.image_url} 
                            price={product.price}
                        />
                    ))
                }
            </div> 
        )
    }
}