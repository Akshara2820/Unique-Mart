import { useParams } from "react-router-dom";
import { getUnique } from "../App"

export default function Unique() {
    let params = useParams();
    let data2 = getUnique(parseInt(params.data2Id,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h1>{data2.name}</h1>
        <p>Price - {data2.price}</p>  
        <p>Category - {data2.category}</p>
        <p>Description - {data2.description}</p>
    </main>
    );
  
}
