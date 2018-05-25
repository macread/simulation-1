import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
    super()
        
        this.state = {
                productName: "",
                price: "",
                imageURL: "",
                selectedProduct: null
            }
    }

    componentDidUpdate(oldProps) {
        if (oldProps !== this.props) {
            if (this.props.selectedProduct) {
                this.setState({
                    selectedProduct: this.props.selectedProduct,
                    productName: this.props.selectedProduct[0].name,
                    price: this.props.selectedProduct[0].price,
                    imageURL: this.props.selectedProduct[0].image_url
                })
            }
        }
    }

    updateProductName(val){
        this.setState({ productName: val })
    }

    updatePrice(val){
        this.setState({ price: val })
    }

    updateImageURL(val){
        this.setState({ imageURL: val })
    }

    addProduct(){
        axios.post('api/product',
        {name: this.state.productName,
        price: this.state.price,
        image_url: this.state.imageURL})
        .then ( results=> this.props.getInventory());
    }

    updateProduct(val){
        axios.put(`api/product/${val}`,
        {name: this.state.productName,
        price: this.state.price,
        image_url: this.state.imageURL})
        .then ( results=> this.props.getInventory());
        
        this.userCancel();
    }

    editProduct(){

    }

    userCancel(){
        this.setState({
            productName: "",
            price: "",
            imageURL: "",
            selectedProductID: null
        })
    }

    render() {
        return (
            <div>

                {
                     this.state.selectedProduct
                     ? (
                        <div>
                            Product Name: <input type='' className='' value={this.state.productName} 
                                onChange={ ( e ) => this.updateProductName( e.target.value ) }/>
                            Price: <input type='' className='' value={this.state.price} 
                                onChange={ ( e ) => this.updatePrice( e.target.value ) }/>
                            Image URL: <input type='' className='' value={this.state.image_url} 
                                onChange={ ( e ) => this.updateImageURL( e.target.value ) }/>
                            <button type='' className='' onClick={()=> this.updateProduct(this.state.selectedProduct[0].product_id)}>Save Changes</button>
                            <button type='' className='' onClick={()=> this.userCancel()}>Cancel</button>
                        </div>
                     ) : (
                        <div>
                            Product Name: <input type='' className='' onChange={ ( e ) => this.updateProductName( e.target.value ) }/>
                            Price: <input type='' className=''onChange={ ( e ) => this.updatePrice( e.target.value ) }/>
                            Image URL: <input type='' className=''onChange={ ( e ) => this.updateImageURL( e.target.value ) }/>
                            <button type='' className='' onClick={()=> this.addProduct()}>Add to Inventory</button>
                            <button type='' className='' onClick={()=> this.userCancel()}>Cancel</button>
                        </div>
                        
                     )

                }
            </div> 
        )
    }
}