import { NavLink, Outlet} from "react-router-dom"
import { getUniques1} from "../App";

function uniques1() {
  let data = getUniques1();
  return (
    <div>

      {data.map((data2) => (
        <NavLink 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/data/${data2.id}`}
          key = {data2.id}
         >
          {data2.Hotel}           
         </NavLink>
      ))}
    <Outlet />
     </div>
  )
}


export default uniques1;