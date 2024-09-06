import { useState } from "react";
import './App.css';
import food from "./Gojo.png";
import food2 from "./SoloLevelling.jpg";
import ShoeCard from "./shoes";
import Carslist from "./car";
const Home = () => {



const [color, setColor] = useState("Blue");

const [age, setAge] = useState(17);

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
]

const cars = [
    {id:1, brand: 'Toyota'},
    {id:2, brand: 'Benz'},
    {id:3, brand: 'Audi'},
]


 
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered is ${name} and your username is ${username}`)}
    
    return ( 
        <div>
            <div>
                {/* <div className="div1"><h2>Step up your game <br />
                with our premium <br />
                collection </h2>
                </div>
                <h1>My favorite color is {color}</h1>
                <button
                type="button"
                onClick={() => setColor("Red")}>Change Color</button>

                <h1>I am {age} years old</h1>
                <button
                type="button"
                onClick={() => setAge(18)}>Change Age</button>

                <form>
                    <div>
                        <label htmlFor="name" className="enter">Username:</label><br />
                        <input type="text" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="age" className="enter">Age:</label><br />
                        <input type="text" id="age" required/>
                    </div>
                    <div>
                        <label htmlFor="Hobby" className="enter">Hobby:</label><br />
                        <input type="text" id="hobby" required/>
                    </div>
                    <button type="submit">Submit</button>
                </form> */}
                {/* {
                   shoeCollection.map((shoe)=>(
                  <ShoeCard
                  key={shoe.id}
                  name={shoe.name}
                  type={shoe.type}
                  image={shoe.image}
                  price={shoe.price}
                  />
                   ))} */}

                   <div>
                   {
                    cars.map((car)=>(
                        <Carslist
                        key={car.id}
                        brand={car.brand}
                        />
                    ))
                   }
                   </div>
                  
            </div>



            <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label><br />
      <label>Enter your Username:
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
        </div>
     );
}
 
export default Home;