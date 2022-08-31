// import Navbar from '../../components/Navbar/Navbar';
import tulip from '../../assets/tulip.jpg';
import "../Home/home.css";
// import Footer from '../../components/Footer/Footer';
import React from 'react';
// import {AppContext} from './Context/AppContext';

const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
 <section className='gambar1'>
    <div style={{
      backgroundImage: `url(${tulip})`,
      backgroundPosition: 'relative',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }}>
    <h2 style={{
      color: "#fff",
      zIndex: "1",
      padding: "20px 25px",
      border: "3px solid #fff",
    }}>Welcome</h2>
    </div>
 </section>
 {/* <Footer /> */}
 </>
   )
 }

export default Home