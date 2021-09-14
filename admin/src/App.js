import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

// chanduni
import CreateCatPost from './components/category-management/CreateCatPost';
import EditCatPost from './components/category-management/EditCatPost';
import CatHome from './components/category-management/CatHome';
import PostDetailsCat from './components/category-management/PostDetailsCat';

import OrderHome from './components/order-management/OrderHome';
import EditOrderPost from './components/order-management/EditOrderPost';
import PostDetailsOrder from './components/order-management/PostDetailsOrder';

// Shavinda
import CreatePostStockPro from './components/manage-products/CreatePostStockPro';
import EditPostStockPro from './components/manage-products/EditPostStockPro';
import HomeStockPro from './components/manage-products/HomeStockPro';
import PostDetailsStockPro from './components/manage-products/PostDetailsStockPro';

import CreatePostStockCat from './components/manage-categories/CreatePostStockCat';
import EditPostStockCat from './components/manage-categories/EditPostStockCat';
import HomeStockCat from './components/manage-categories/HomeStockCat';
import PostDetailsStockCat from './components/manage-categories/PostDetailsStockCat';

import CreatePostStockSup from './components/manage-suppliers/CreatePostStockSup';
import EditPostStockSup from './components/manage-suppliers/EditPostStockSup';
import HomeStockSup from './components/manage-suppliers/HomeStockSup';
import PostDetailsStockSup from './components/manage-suppliers/PostDetailsStockSup';

import StockHome from './components/manage-products/StockHome';
import RequestProducts from './components/manage-suppliers/RequestProducts';

import adminDashboard from './components/AdminDashboard/adminDashboard';





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
   
     {/* <h1>Admin dashboard</h1>
    <a href="/order">Orders</a>
    <br/>
    <a href="/">Category</a> */}
         
      
        <Route path="/" exact component={adminDashboard}></Route>

        {/* Chanduni */}
        <Route path="/category/add" exact component={CreateCatPost}></Route>
        <Route path="/category/edit/:id" exact component={EditCatPost}></Route>
        <Route path="/category/post/:id" exact component={PostDetailsCat}></Route>
        <Route path="/category/home" exact component={CatHome}></Route>

        <Route path="/order" exact component={OrderHome}></Route>
        <Route path="/order/edit/:id" exact component={EditOrderPost}></Route>
        <Route path="/order/post/:id" exact component={PostDetailsOrder}></Route>
<<<<<<< HEAD


        {/* Shavinda */}
        <Route path = "/stockHome" exact component = {StockHome}/>

        <Route path = "/homeP" component = {HomeStockPro}/>
        <Route path = "/homeC" component = {HomeStockCat}/>
        <Route path = "/homeS" component = {HomeStockSup}/>
      
        <Route path = "/addP" component={CreatePostStockPro}></Route>
        <Route path = "/editP/:id" component={EditPostStockPro}></Route>
        <Route path = "/postP/:id" component={PostDetailsStockPro}></Route>

        <Route path = "/addC" component={CreatePostStockCat}></Route>
        <Route path = "/editC/:id" component={EditPostStockCat}></Route>
        <Route path = "/postC/:id" component={PostDetailsStockCat}></Route>  


        <Route path = "/addS" component={CreatePostStockSup}></Route>  
        <Route path = "/editS/:id" component={EditPostStockSup}></Route>
        <Route path = "/postS/:id" component={PostDetailsStockSup}></Route>

        <Route path = "/req" component={RequestProducts}></Route>

                   
=======
        
        <Route path = "/feedback/" exact component = { feedbackList }/>
       

         
>>>>>>> f9ba8566d47e2686f95444deac44089b98bda4d0
   
   </BrowserRouter>
    )
   }
 }


App.propTypes = {}
export default App
