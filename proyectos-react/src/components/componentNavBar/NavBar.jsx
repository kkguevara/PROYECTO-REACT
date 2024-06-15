import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


function Navbar({count}) {

  
  const handleCategoryClick = (category) => {
 console.log(`Clicked on category: ${category}`);
   };

  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <img src= "../public/logo-ron.png" alt="logo" style={{
                    width: '200px',
                    height: 'auto',
                    margin: '3px',
                    borderRadius: '5px'
                }}  />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link  
              to="/categoryFilter/Ron_Añejo" 
              onClick={() => handleCategoryClick("Ron Añejo")}
            >
              Ron Añejo
            </Link>
            <Link  
              to="/categoryFilter/Ron_Blanco" 
              onClick={() => handleCategoryClick("Ron Blanco")}
            >
              Ron Blanco
            </Link>
          </div>
        </div>
      </div>
      <CartWidget itemCount={count} />
    </nav>
    </>
  );
}

export default Navbar;
