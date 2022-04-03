import { useParams } from "react-router-dom";
import { getRestaurant } from "../App"

export default function Restaurant() {
    let params = useParams();
    let restaurant = getRestaurant(parseInt(params.restaurantId,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{restaurant.Name}</h2>
        <p>Price - {restaurant.Price}</p>  
        <p>Category - {restaurant.Category}</p>
        <p>Description - {restaurant.description}</p>
    </main>
    );
  
}