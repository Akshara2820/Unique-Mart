import { NavLink, Outlet } from "react-router-dom";
import {getAllData} from "../App";

function AllData(){
    let data = getAllData();

    return (
        <div style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
        {data.map((unique) => (
        <NavLink 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/unique/${unique.id}`}
          key = {unique.id}
         >
          {unique.Hotel}           
         </NavLink>
      ))}
    </nav>
    <Outlet/>
    </div>
    )
}

export default AllData;