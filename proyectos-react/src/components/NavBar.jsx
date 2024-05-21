import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
                RON🥃
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button>
                <Link to={"/categoryFilter/Ron_Añejo"}>Ron Añejo</Link>
              </button>            
              <button>
                <Link to={"/categoryFilter/Ron_Blanco"}>Ron Blanco</Link>
                 </button>            
              </div>
          </div>
        </div>
        <CartWidget />
      </nav>
     
    </>
  );
}

export default Navbar;
