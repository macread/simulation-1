import React, { Component } from 'react';
import Product from '../../component/product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
    super()
        
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('api/inventory').then( results => {
            this.setState({ products: results.data });
        });
       this.setState({
           randomDogURL: this.state.defaultDog
       })
    }

    render() {
        return (
            <div>
                Dashboard
                {
                    this.state.products.map( product => (
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