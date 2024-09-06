import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Nike
            </div>
            <ul className="nav-links">
                <li><a href="#home"><Link to = "/">Home</Link></a></li>
                <li><a href="#about"><Link to = "/product">Product</Link></a></li>
                <li><a href="#services"><Link to = "/about">About</Link></a></li>
                <li><a href="#contact"><Link to = "/cart">Cart</Link></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
