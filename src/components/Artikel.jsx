import React from 'react';
import './Artikel/artikel.css';
import kapal from '../assets/kapal.jpg';
import ikan from '../assets/ikan.jpg';
import bukit from '../assets/bukit.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

function Artikel() {
  return (
    <>
    <Navbar />
    <section className="Artikel">
     <div className='Art'>
                <div className="img-box1">
                    <img className="img1"src={kapal} alt="kapal" />
                </div>
                <div className="img-box1">
                    <img className="img1"src={ikan} alt="ikan"/>
                </div>
                <div className="img-box1">
                    <img className="img1"src={bukit} alt="bukit" />
                </div>
             </div>
        <div className="text">
            <p>Pantai Pink Lombok adalah salah satu destinasi wisata yang harus dikunjungi. Pantai Pink terletak di Desa Tanjung Luar, Lombok Timur, NTB.
               Untuk bisa sampai di Pantai Pink kita dapat menggunakan jalan darat(Mataram-Pantai Pink) selama 4-5 jam atau jalan laut(Mataram-Tanjung Luar-Pantai Pink) selama 1 setengah jam,
               Pantai Pink memiliki 3 pantai ada pantai pink 1, pink 2 dan pink 3. Selain pemandangan yang bagus dan pasir yang lembut, di Pantai Pink kita juga bisa melakukan aktifitas lain seperti
               diving dan Snorkling
            </p>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Artikel