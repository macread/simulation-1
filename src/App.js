import React, { Component } from 'react';
import axios from 'axios';
import Header from './component/header/Header'
import Dashboard from './component/dashboard/Dashboard'
import Form from './component/form/Form'



class App extends Component {

  constructor() {
    super()
        this.state = {
            products: []
        }
        this.getInventory = this.getInventory.bind(this);
    }

    componentDidMount() {
        this.getInventory();
    }

    getInventory(){
        axios.get('api/inventory').then( results => {
            this.setState({ products: results.data });
        });
    }

  render() {
    return (
      <div>
        <Header />
        <Dashboard 
          products={this.state.products}
          getInventory={this.getInventory}
        />
        <Form 
          getInventory={this.getInventory}
        />
      </div> 
    );
  }
}

export default App;
