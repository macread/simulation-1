import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
    super()
        
        this.state = {
                productName: "",
                price: "",
                imageURL: ""
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

    }

    userCancel(){
        this.setState({
            productName: "",
            price: "",
            imageURL: ""
        })
    }

    render() {
        return (
            <div>
                Product Name: <input type='' className='' onChange={ ( e ) => this.updateProductName( e.target.value ) }/>
                Price: <input type='' className=''onChange={ ( e ) => this.updatePrice( e.target.value ) }/>
                Image URL: <input type='' className=''onChange={ ( e ) => this.updateImageURL( e.target.value ) }/>
                <button type='' className='' onClick={()=> this.addProduct()}>Add</button>
                <button type='' className='' onClick={()=> this.userCancel()}>Cancel</button>
            </div> 
        )
    }
}