import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Lesson from './components/Lesson';
import Network from './components/Network';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/lesson" element={<Lesson/>} />
        <Route path="/network" element={<Network/>} />
      </Routes>
      {/* <Home/>
    <About/>
    <Lesson/>
    <Network/> */}
      <Footer />

    </>
  );
}

export default App;
