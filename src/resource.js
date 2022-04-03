let restaurants = [
    {
      Name: "Samsung Charger",
      Price: "600Rs",
      Category: "Electronic",
      id:1,
      description:"Model Number: Original EP-TA20IWECGIN Type C",
      number:11
    },
  
    {
      Name: "Samsung Earphone",
      Price: "1250Rs",
      Category: "Electronic",
      id:2,
      description:"With Mic:Yes, Connector type: 3.5 mm",
      number: 12
    },
  
    {
      Name: "T-Shirt",
      Price:"877Rs",
      Category: "Men's Were",
      id:3,
      description:"Size M   XL are only available",
      number:13,
    },
  
    {
      Name:"Saree",
      Price:"2099Rs",
      Category:"Women's Wear",
      id:4,
      description:"Solid Fashion Lycra Blend Saree  (Magenta)",
      number:14
    }
  ]
  
export function getRestaurants() {
  return restaurants;
}


export function getRestaurant(number) {
  return restaurants.find(
    (restaurant) => restaurant.number === number
  );
}