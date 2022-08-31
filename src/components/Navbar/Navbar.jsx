// import { useState } from 'react'
import React from "react";
import { Link } from "react-router-dom";
import '../Navbar/navbar.css';
import { AppContext } from "../Context/AppContext";


const Navbar = () => {
  const context = React.useContext(AppContext);
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            {/* <div className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
            <Link to="/" className="navbar-brand">
              Raya Ibensani
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    {context.lang === 'eng' ? 'Home' : 'Beranda'}
                    {/* Home */}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link active">
                  {context.lang === 'eng' ? 'About' : 'Tentang'}
                    {/* About */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Skills" className="nav-link active">
                  {context.lang === 'eng' ? 'Skills' : 'Skil'}
                    {/* Skills */}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Blog" className="nav-link active">
                  {context.lang === 'eng' ? 'Blog' : 'Artikel'}
                    {/* Blog */}
                  </Link>
                </li>
                <div>
              <button className="btn btn-warning" onClick={() => context.onchangeBahasa(context.lang === "eng" ? "ind" : "eng")}>Language</button>
                </div>
              </ul>
            </div>
            </div>
          {/* </div> */}
        </nav>
      </>
    );
  }
  
  export default Navbar;