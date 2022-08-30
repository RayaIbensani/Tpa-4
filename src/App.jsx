import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Artikel from "./components/Artikel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Artikel' element={<Artikel/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
    </div>
  );
}

export default App;
