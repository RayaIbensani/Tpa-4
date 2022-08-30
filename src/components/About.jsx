import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import me from '../assets/Raya.jpg';
import './About/about.css';

function About() {
  return (
    <>
    <Navbar />
    <section className="about">
        <div className="container">
            <h3>ABOUT</h3>
            {/* <div className='col-md-2'> */}
            <img src={me} alt="Raya" className='profile' style={{justifyContent: "center", alignItems: "center"}}></img>
            <p>Halo Nama Saya Qayla Rayani Ibensani Putri biasanya dipanggil Aya' 
                atau Raya, Saya bertempat tinggal Di Sumbawa Barat tepatnya Maluk. Tahun 2015 saya bersekolah di Mataram tepatnya di Abu Hurairah,
                sampai saya kelas 12 atau kelas 3 SMA, dan saya sudah menyelesaikan studi Sekolah Menengah Atas(SMA) pada Maret 2022 kemarin, sekarang saya fokus mengikuti
                Coding Bootcamp Skilvul dan Amman dan juga mencoba mendaftarkan diri untuk melanjutkan studi di jenjang kuliah.
            </p>
            </div>
            {/* </div> */}
    </section>
    <Footer />
    </>
  )
}

export default About