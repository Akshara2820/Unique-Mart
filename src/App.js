import './App.css';
import React,{Component} from 'react';
// import Home from './Components/Home.js'
// import Table from './Components/Table.js'


const data =[
  {
    Name: "Samsung Charger",
    Price: "600Rs",
    Category: "Electronic"
  },

  {
    Name: "Samsung Earphone",
    Price: "1250Rs",
    Category: "Electronic"
  },

  {
    Name: "T-Shirt",
    Price:"877Rs",
    Category: "Men's Were"
  },

  {
    Name:"Shree",
    Price:"2099Rs",
    Category:"Women's Wear"
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
                      <td>{val.Name}</td>
                      <td>{val.Price}</td>
                      <td>{val.Category}</td>
                    </tr>
                  )
                })}
              </thead>
            </table>
              
          </>
      );
  
}


export default App;
