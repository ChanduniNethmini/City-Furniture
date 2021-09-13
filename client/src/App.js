import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateOrderPost from './components/Order-management/CreateOrderPost';
import CustomizedOrder from './components/Order-management/CustomizedOrder';
import Home from './components/Home/Home';
import Cart from './components/Shopping-cart/Cart';
import { CartProvider } from "react-use-cart";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      
      <CartProvider>
      
        {/* Chanduni */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/customized" exact component={CustomizedOrder}></Route>
        <Route path="/order/add" exact component={CreateOrderPost}></Route>

        </CartProvider>
       
        
      
      </BrowserRouter>
    )
  }
}
export default App;
