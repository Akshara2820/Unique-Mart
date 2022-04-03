import { useParams } from "react-router-dom";
import { getRestaurant } from "../App"

export default function Restaurant() {
    let params = useParams();
    let data2 = getRestaurant(parseInt(params.data2Id,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{data2.Name}</h2>
        <p>Price - {data2.Price}</p>  
        <p>Category - {data2.Category}</p>
        <p>Description - {data2.description}</p>
    </main>
    );
  
}
