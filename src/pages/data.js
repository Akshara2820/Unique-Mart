import {useParams} from "react-router-dom"
import {getData} from "../App"


function Data(){
    let params =useParams ();
    let unique =getData(parseInt(params.uniqueId,10));
    return(
        <main>
            <h2>{unique.Name}</h2>
            <p> Price: {unique.Price}</p>
            <p>Description: {unique.description}</p>
            <p>Category: {unique.Category}</p>
        </main>
    );
}

export default Data;