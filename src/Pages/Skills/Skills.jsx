import React from 'react';
// import Footer from '../../components/Footer/Footer';
// import Navbar from '../../components//Navbar/Navbar';
import Moyo from '../../assets/Mata-jitu.JPG';
import Airterjun from '../../assets/Air-terjun.JPG';
import Rumah from '../../assets/Rumah.JPG';
import pelangi from '../../assets/pelangi.jpg';
import pantai from '../../assets/pantai.jpg';
import maluk from '../../assets/maluk.jpg';
import kapal from '../../assets/kapal.jpg';
import ikan from '../../assets/ikan.jpg';
import bukit from '../../assets/bukit.jpg';
import '../Skills/skills.css';
// import { AppContext } from './Context/AppContext';


const Skills = () => {
  return (
   <>
    {/* <Navbar /> */}
    <section className='Skills'>
        <div className="container">
            <h3>Skills</h3>
             <p>Saya menyukai photography, berikut adalah beberapa foto yang saya ambil</p>
        </div>
       </section>
       <div className='Pic'>
        <div className="col-12">
            <div className="row" id="container-card">
        <div className='col-12 col-sm-6 col-md-4 py-3'>
       <article>
          <figure>
            <img src={Moyo} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={Airterjun} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={Rumah} alt="()"  className="img-box"/>
          </figure>
        </article>
        </div>
        <div className='col-12 col-sm-6 col-md-4 py-3'>
        <article>
          <figure>
            <img src={pelangi} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={maluk} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={pantai} alt="()"  className="img-box"/>
          </figure>
        </article>
        </div>
        <div className='col-12 col-sm-6 col-md-4 py-3'>
        <article>
          <figure>
            <img src={kapal} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={ikan} alt="()"  className="img-box"/>
          </figure>
        </article>
        <article>
          <figure>
            <img src={bukit} alt="()"  className="img-box"/>
          </figure>
        </article>
        </div>
        </div>
        </div>
            </div>
         {/* <Footer /> */}
          </>
  )
}

export default Skills;