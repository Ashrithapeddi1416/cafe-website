import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Refillreveal from "./components/Refillreveal";

function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Herosection/>} /> 
        <Route path="/About" element={<About/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Refillreveal" element={<Refillreveal/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
