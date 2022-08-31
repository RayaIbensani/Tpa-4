import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import "./App.css";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Skills from "../src/Pages/Skills/Skills";
import Blog from "../src/Pages/Blog/Blog";
import {AppContext} from './components/Context/AppContext';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [bahasa, setBahasa] = useState('eng');
  return (
    <AppContext.Provider
    value={{
      lang: bahasa,
      onchangeBahasa: setBahasa
    }}
    >
      <Navbar />
    <div>
      {/* <div style={{textAlign: 'revert-layer'}}>
      <button className="btn btn-warning" type="button" style={{border: '0px solid'}} onclick={() => setBahasa(bahasa === "eng" ? "ind" : "eng")}>
      Language
      </button>
    </div> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Blog' element={<Blog/>}/>
    </Routes>
    <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;
