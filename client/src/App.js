import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import CreateOrderPost from './components/Order-management/CreateOrderPost';
import CustomizedOrder from './components/Order-management/CustomizedOrder';
import Home from './components/Home/Home';
import Cart from './components/Shopping-cart/Cart';
import Createfeedback from "./components/feedback/create-feedback";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CartProvider>
          {/* Chanduni */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/customized" exact component={CustomizedOrder}></Route>
          <Route path="/order/add" exact component={CreateOrderPost}></Route>
          {/* Kithmini */}
          <Route path="/feedback/create" component={Createfeedback} />
        </CartProvider>
      </BrowserRouter>
    )
  }
}
export default App;
