import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateOrderPost from './components/CreateOrderPost';

import Createfeedback from "./components/feedback/create-feedback";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      
        
      
        {/* Chanduni */}
        <Route path="/order/add" component={CreateOrderPost}></Route>

        <Route path = "/feedback/create" component = { Createfeedback }/>
        


      
      </BrowserRouter>
    )
  }
}
export default App;
