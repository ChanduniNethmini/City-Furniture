import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateOrderPost from './components/CreateOrderPost';



class App extends Component{
  render(){
    return(
      <BrowserRouter>
      
        
      
        {/* Chanduni */}
        <Route path="/order/add" component={CreateOrderPost}></Route>
        


      
      </BrowserRouter>
    )
  }
}
export default App;
