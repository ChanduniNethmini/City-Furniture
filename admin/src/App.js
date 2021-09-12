import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateCatPost from './components/CreateCatPost';
import EditCatPost from './components/EditCatPost';
import CatHome from './components/CatHome';
import PostDetailsCat from './components/PostDetailsCat';


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
        <Route path="/category/add" component={CreateCatPost}></Route>
        <Route path="/category/edit/:id" component={EditCatPost}></Route>
        <Route path="/category/post/:id" component={PostDetailsCat}></Route>
        
         
   
   </BrowserRouter>
    )
   }
 }


App.propTypes = {}
export default App
