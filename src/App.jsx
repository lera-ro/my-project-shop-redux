import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Contacts from "./Contacts"; 
import Specialties from "./Specialties/Specialties";
import Cosmetics from "./CosmeticsComponents/Cosmetics";
import Cart from "./Cart/Cart";

const App = () => {
  return (
  <div>
  <Router>
    <nav>     
    <div className="icon-goods">
      <Link to="/" className="link"><img src="https://img.icons8.com/?size=100&id=tLuf6TL8RS4h&format=png&color=000000" width="30px" alt="shop" /></Link>
    </div> 
    <div className="header">
      <Link to="/specialties" className="link">specialties</Link>
      <Link to="/contacts" className="link">contacts</Link> 
      <Link to="/cart" className="link"><img src="https://img.icons8.com/?size=100&id=8386&format=png&color=000000" width="30px" alt="basket" /></Link>
      </div>  
    </nav>

    <Routes>
      <Route path="/" element={<Cosmetics />} />  
      <Route path="/specialties" element={<Specialties />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />          
    </Routes>
    </Router>            
      </div>
    )
}

export default App;
