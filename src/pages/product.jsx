import ShoeCard from "../shoes";
import food from "../Gojo.png";
import { useState, useEffect, useRef } from "react";
import food2 from "../SoloLevelling.jpg";


const Products = () => {
    const [inputValue, setInputValue] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
      })
  
    const shoeCollection = [
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food,
            price: 29,
        },
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food2,
            price: 29,
        },
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food,
            price: 29,
        },
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food2,
            price: 29,
        },
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food,
            price: 29,
        },
        {
            id: 1,
            name: "Nike",
            type: "AirJordan",
            image: food2,
            price: 29,
        },
        
    ]
    return ( 
        <>
        <div className="Count">{count.current}</div>
         {
                   shoeCollection.map((shoe)=>(
                  <ShoeCard
                  key={shoe.id}
                  name={shoe.name}
                  type={shoe.type}
                  image={shoe.image}
                  price={shoe.price}
                  addToCart={(e) => setInputValue(e.target.value) }
                  />
                   ))}
       
        </>
     );
}
 
export default Products;