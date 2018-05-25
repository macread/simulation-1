import React, { Component } from 'react';
import Product from '../../component/product/Product'

export default class Dashboard extends Component {
    constructor() {
    super()
        
        this.state = {
            products: [
                {id: 0,
                    url: 'https://images.dog.ceo/breeds/dane-great/n02109047_23852.jpg',
                    name: 'Dane',
                    price: 1000
                },
                {id: 1,
                    url: 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_3074.jpg',
                    name: 'Chip',
                    price: 1002
                },
                {id: 2,
                    url: 'https://images.dog.ceo/breeds/appenzeller/n02107908_795.jpg',
                    name: 'Frosty',
                    price: 1003
                },
                {id: 3,
                    url: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1583.jpg',
                    name: 'Fisher',
                    price: 1004
                }
            ]
        }
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
                            imageURL={product.url} 
                            price={product.price}
                        />
                    ))
                }
            </div> 
        )
    }
}