import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
const [isopen,setIsopen]=useState(false);
const Togglenavbar=()=>{
    setIsopen(!isopen);
}
  return (
    <div className='bg-neutral-900 sticky top-0 z-50 backdrop-blur text-amber-100 p-4 flex justify-between items-center '>
  
  <div className='flex items-center space-x-5'>
    <div
      className='h-[100px] w-[100px] rounded-full shadow-lg bg-cover bg-center'
      style={{ backgroundImage: "url('/cafe-website/logo.png')" }}
    ></div>
    <div className='text-2xl font-extrabold'>Crimes & Cappuccinos</div>
  </div>

  <ul className="hidden md:flex space-x-8 text-xl">
  <li className="group">
    <Link to="/About" className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-amber-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
      About
    </Link>
  </li>
  <li className="group">
    <Link to="/Menu" className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-amber-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
      Detective's Menu
    </Link>
  </li>
  <li className="group">
    <Link to="/Refillreveal" className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-amber-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
      Refill & Reveal
    </Link>
  </li>
  <li className="group">
    <Link to="/Contact" className="transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-amber-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
      Contact Us
    </Link>
  </li>
</ul>

 
  <div className='md:hidden'>
    <button onClick={Togglenavbar}>
      {isopen ? <X size={32} /> : <Menu size={32} />}
    </button>
  </div>

  {isopen && (
    <ul className='absolute top-[100px] left-0 w-full bg-neutral-800 p-4 space-y-4 text-xl md:hidden'>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Menu">Detective's Menu</Link></li>
      <li><Link to="/Refillreveal">Refill & Reveal</Link></li>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
  )}
</div>
  );
}

export default Navbar;