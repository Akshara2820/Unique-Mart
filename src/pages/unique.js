import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUnique } from "../App"
import axios from "axios";


export default function Unique() {
    const {data2Id} = useParams();
    const [itemData, setItemData] = useState({})

    useEffect(
      async () => {    
          if(data2Id != null){
          console.log("params", data2Id);
          const url = "/data/" + data2Id;
          try{
  
              const response = await axios.get(url)
              const resData = response.data
              setItemData(resData)
          }catch(err){
              console.log("Err getting item data", err)
          }
          }
      }, [data2Id]
  );
    
    return (
      <main style={{ padding: "1rem" }}>
        <h1>{itemData.name}</h1>
        <p>Price - {itemData.price}</p>  
        <p>Category - {itemData.category}</p>
        <p>Description - {itemData.description}</p>
    </main>
    );
  
}
