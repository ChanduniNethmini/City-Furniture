import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import SidebarStock from '../SidebarStock/SidebarStock';

export default class StockHome extends Component {
    render() {
        return (
            <div>
            <SidebarStock/>
           
      
            <div className = "container" style={{marginTop:"40px"}}>
        
            <header>
            
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://wallpaperaccess.com/full/2076086.jpg")', backgroundSize:'cover',height:"100%"}}>
                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3">City Furniture</h1>
                    <h4 className="mb-3">Stock Management</h4><br/>
                    <a className="btn btn-outline-light btn-lg" href="/homeP" role="button">Products</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/homeC" role="button">Categories</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/homeS" role="button">Suppliers</a>
                    <br/><br/><br/>
                    </div>
                </div>
                </div>
            </div>
            </header>
            <br/><br/><br/>

            

            </div>
                <Footer />
            </div>

        )
    }
}


