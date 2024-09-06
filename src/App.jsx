import Home from "./home";
import Navbar from "./navbar";
import Footer from "./footer";
import Products from "./pages/Product";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





const App = () => {

  return (
    <Router>


      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/contact' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
