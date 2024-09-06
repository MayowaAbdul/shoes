import './App.css';
const ShoeCard = ({name, type, image, price, addToCart}) => {
    return ( 
        <>

        <div className="container">
            <div className="image">
        <img src={image} alt="name" />
        <div className="desc">
        <div><h1>{name}</h1> <h3>{price}</h3></div>
        <h6>{type}</h6>
        <button onClick={addToCart}> Add to cart</button>
        </div>
        </div>
        </div>

        
        
       
        </>
     );
}
 
export default ShoeCard;