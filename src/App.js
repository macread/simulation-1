import React, { Component } from 'react';
import Header from './component/header/Header'
import Dashboard from './component/dashboard/Dashboard'
import Form from './component/form/Form'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div> 
    );
  }
}

export default App;
