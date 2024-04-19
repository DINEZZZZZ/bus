import React from 'react';
import {  FaBus, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';





function Navbar() {
  const navigate = useNavigate();

  const navigateTO = ()=>{
     navigate('/bus/home')
  }


 
  return (
    <header className="bg-orange-500 text-white py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
      <span className='text-3xl font-bold'><FaBus/></span>
        <div className="flex items-center">
          
          <h1 className="text-lg font-bold">Student Safty Tracker</h1>
        </div>
        <div className="flex items-center">
          
        
          <FaSignOutAlt onClick={()=>navigateTO()} className="text-xl" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
