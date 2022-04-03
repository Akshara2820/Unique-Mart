import { useParams } from "react-router-dom";
import { getUnique } from "../App"

export default function Unique() {
    let params = useParams();
    let data2 = getUnique(parseInt(params.data2Id,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{data2.Name}</h2>
        <p>Price - {data2.Price}</p>  
        <p>Category - {data2.Category}</p>
        <p>Description - {data2.description}</p>
    </main>
    );
  
}
