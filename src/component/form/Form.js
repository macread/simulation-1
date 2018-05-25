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
            this.setState({
                selectedProduct: this.props.selectedProduct  
            })
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
                            Product Name: <input type='' className='' value={this.state.selectedProduct[0].name} 
                                onChange={ ( e ) => this.updateProductName( e.target.value ) }/>
                            Price: <input type='' className='' value={this.state.selectedProduct[0].price} 
                                onChange={ ( e ) => this.updatePrice( e.target.value ) }/>
                            Image URL: <input type='' className='' value={this.state.selectedProduct[0].image_url} 
                                onChange={ ( e ) => this.updateImageURL( e.target.value ) }/>
                            <button type='' className='' onClick={()=> this.editProduct()}>Save Changes</button>
                            <button type='' className='' onClick={()=> this.userCancel()}>Cancel</button>
                        </div>
                     ) : (
                        <div>
                            Product Name: <input type='' className='' onChange={ ( e ) => this.updateProductName( e.target.value ) }/>
                            Price: <input type='' className=''onChange={ ( e ) => this.updatePrice( e.target.value ) }/>
                            Image URL: <input type='' className=''onChange={ ( e ) => this.updateImageURL( e.target.value ) }/>
                            <button type='' className='' onClick={()=> this.addProduct()}>Add to Inventory</button>
                        </div>
                        
                     )

                }
            </div> 
        )
    }
}