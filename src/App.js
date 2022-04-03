import './App.css';
import React,{Component} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import {NavLink, Outlet} from "react-router-dom";

const data =[
  {
    Name: "Samsung Charger",
    Price: "600Rs",
    Category: "Electronic",
    id:1,
    description:"Model Number: Original EP-TA20IWECGIN Type C",
    number:11
  },

  {
    Name: "Samsung Earphone",
    Price: "1250Rs",
    Category: "Electronic",
    id:2,
    description:"With Mic:Yes, Connector type: 3.5 mm",
    number: 12
  },

  {
    Name: "T-Shirt",
    Price:"877Rs",
    Category: "Men's Were",
    id:3,
    description:"Size M   XL are only available",
    number:13,
  },

  {
    Name:"Shree",
    Price:"2099Rs",
    Category:"Women's Wear",
    id:4,
    description:"Solid Fashion Lycra Blend Saree  (Magenta)",
    number:14
  }
]

function App () {
      return(
          <>
              <nav className="main-nav">
                  {/*website-Name */}
                  <div className="website-name">
                      <h2> Unique Mart</h2>    
                  </div>
              </nav>
            <table>
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>  
                      <NavLink 
                        to ={`/id`}
                        key={data.id}
                        >
                        {val.Name}
                          
                      </NavLink> </td>
                      
                      <td>{val.Price}</td>                  
                      <td>{val.Category}</td>
                    </tr>
                  )
                })}
              </thead>
            </table>
            <Outlet/>
              
          </>
      );
  
}


export default App;

