import React, { Component } from 'react';
import Product from '../../component/product/Product'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard
                <Product />
            </div> 
        )
    }
}