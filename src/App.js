import React, { Component } from 'react';
import axios from 'axios';
import Header from './component/header/Header'
import Dashboard from './component/dashboard/Dashboard'
import Form from './component/form/Form'



class App extends Component {

  constructor() {
    super()
        this.state = {
            products: [],
            selectedProduct: null
        }
        this.getInventory = this.getInventory.bind(this);
        this.setSelectedProductID = this.setSelectedProductID.bind(this);
    }

    componentDidMount() {
        this.getInventory();
    }

    getInventory(){
        axios.get('api/inventory').then( results => {
            this.setState({ products: results.data });
        });
    }

    setSelectedProductID(val){
      axios.get(`api/product/${val}`).then( results => {
        this.setState({ selectedProduct: results.data });
      });
    }

  render() {
    return (
      <div>
        <Header />
        <Dashboard 
          products={this.state.products}
          getInventory={this.getInventory}
          setSelectedProductID={this.setSelectedProductID}
        />
        <Form 
          getInventory={this.getInventory}
          selectedProduct={this.state.selectedProduct}

        />
      </div> 
    );
  }
}

export default App;
