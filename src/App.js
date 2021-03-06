import './App.css';
import React,{Component} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import {Link, Outlet} from "react-router-dom";
import axios from "axios";



class App extends Component {
  constructor (props){
    super(props);
    this.refreshList = this.refreshList.bind()
    this.state={
      data:[],
      activeItem:{
        name:"",
        price:"",
        category:"",
        description:"",


      }
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
        .get("/api/")
        .then((res) => {
            console.log("response", res)
            const data = res.data;
            this.setState({data: data})
        })
        .catch((err) => {
          console.log(err)
        });
  }


  details_list =()=>{
    axios
    .get("/data")
    .then ((res)=>{
      console.log("responce",res)
      const data_id = res.data
      this.setState({data:data_id})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  details_category =()=>{
    axios
    .get("/category")
    .then ((res) =>{
      console.log("responce",res)
      const category_data =res.data
      this.setState({data:category_data})
    })
    .catch((err) =>{
      console.log(err)
    })

  }

  render (){
    return (
      <>
      <nav className="main-nav">
          {/*website-name */}
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
        {this.state.data.map((val, key) => {
          return (
            <tr key={key}>
              <td><Link to ={`/data/${val.id}`} key={val.id}>{val.name} </Link> </td>
              <td>{val.price}</td>                  
              <td>{val.category}</td>
            </tr>
          )
        })}
      </thead>
    </table>
    <Outlet/>
      
  </>
    );
  }
}







// function App () {
//       return(
//           <>
//               <nav className="main-nav">
//                   {/*website-name */}
//                   <div className="website-name">
//                       <h2> Unique Mart</h2>    
//                   </div>
//               </nav>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Category</th>
//                 </tr>
//                 {data.map((val, key) => {
//                   return (
//                     <tr key={key}>
//                       <td><Link to ={`/data/${val.id}`} key={data.id}>{val.name} </Link> </td>
//                       <td>{val.price}</td>                  
//                       <td>{val.category}</td>
//                     </tr>
//                   )
//                 })}
//               </thead>
//             </table>
//             <Outlet/>
              
//           </>
//       );
  
// }

export function getUniques1() {
  return [];
  }
  
  
  export function getUnique(id) {
  return [].find(
    (data2) => data2.id === id
  );
  }
  
export default App;