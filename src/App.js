import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Lesson from './components/Lesson';
import Network from './components/Network';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Video from './components/Video';
import Audio from './components/Audio';
import Notes from './components/Notes';
// import ProtectedRoute from './ProtectedRoute';
// import { useState, useEffect } from 'react';


function App() {

  // // check if user is logged in
  // const [auth, setauth] = useState(false);
  // const [auth1, setauth1] = useState(true);

  // const isLoggedIn = async () => {
  //   try {
  //     const res = await fetch('/auth', {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials: "include"
  //     });

  //     if (res.status === 200) {
  //       setauth(true)
  //       setauth1(false)
  //     }
  //     if (res.status === 401) {
  //       setauth(false)
  //       setauth1(true)
  //     }

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/network" element={<Network />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/video" element={<Video />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/notes" element={<Notes />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
