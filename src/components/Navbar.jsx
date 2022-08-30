// import { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar/navbar.css';


function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            {/* <div className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
            <Link to="/" className="navbar-brand">
              Page
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link active" aria-current="page">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Skills" className="nav-link active" aria-current="page">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Artikel" className="nav-link active" aria-current="page">
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
            </div>
          {/* </div> */}
        </nav>
      </>
    );
  }
  
  export default Navbar;