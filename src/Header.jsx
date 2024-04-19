import React from 'react';
import { FaUserCircle, FaSignOutAlt, FaBus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';





function Header() {
  const navigate = useNavigate();

  const AdminPage = ()=>{
    navigate('/bus/signinAdmin')
  
  }

  const navigateTO = ()=>{
    navigate('/bus/')
 }

 
  return (
    <header className="bg-orange-500 text-white py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
      <span className='text-3xl font-bold'><FaBus/></span>
        <div className="flex items-center">
          
          <h1 className="text-xl  text-black font-bold">Student Safty Tracker</h1>
        </div>
        <div className="flex items-center gap-1">
          
          <FaUserCircle onClick={()=>AdminPage()} className="text-xl mr-4" />
          <FaSignOutAlt onClick={()=>navigateTO()} className="text-xl" />
        </div>
      </div>
    </header> 
  );
}

export default Header;
