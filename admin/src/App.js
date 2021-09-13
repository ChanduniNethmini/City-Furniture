import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateCatPost from './components/CreateCatPost';
import EditCatPost from './components/EditCatPost';
import CatHome from './components/CatHome';
import PostDetailsCat from './components/PostDetailsCat';
import OrderHome from './components/OrderHome';
import EditOrderPost from './components/EditOrderPost';
import PostDetailsOrder from './components/PostDetailsOrder';


import feedbackList from "./components/feedback/feedback-list";
/**
* @author
* @class App
**/

class App extends Component {
 state = {}
 render() {
  return(
    <BrowserRouter>
   
     <h1>Admin dashboard</h1>
    <a href="/order">Orders</a>
    <br/>
    <a href="/">Category</a>
      <Route path="/" exact component={CatHome}></Route>
        <Route path="/category/add" exact component={CreateCatPost}></Route>
        <Route path="/category/edit/:id" exact component={EditCatPost}></Route>
        <Route path="/category/post/:id" exact component={PostDetailsCat}></Route>
        <Route path="/order" exact component={OrderHome}></Route>
        <Route path="/order/edit/:id" exact component={EditOrderPost}></Route>
        <Route path="/order/post/:id" exact component={PostDetailsOrder}></Route>
        
        <Route path = "/feedback/" exact component = { feedbackList }/>
       

         
   
   </BrowserRouter>
    )
   }
 }


App.propTypes = {}
export default App
