import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar_R from './components/navbar'; // Adjust path as necessary
import Home from './components/home';
import Players from './components/players';
import News from './components/news';
import ContactUs from './components/contactus';
import Footer from './components/footer';
//import News from './components/News';
//import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar_R />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer/>

    </Router>
    
  );
};
export default App;
