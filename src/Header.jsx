import React from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
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
    <header className="bg-blue-500 text-white py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
      <img src="https://tse2.mm.bing.net/th?id=OIP.UCitU1X3uVQ6Hc8A9cnuIgHaEF&pid=Api&P=0&h=180" alt="Logo" className="w-20 h-10 mr-2" />
        <div className="flex items-center">
          
          <h1 className="text-lg font-bold">Student Safty Tracker</h1>
        </div>
        <div className="flex items-center">
          
          <FaUserCircle onClick={()=>AdminPage()} className="text-xl mr-4" />
          <FaSignOutAlt onClick={()=>navigateTO()} className="text-xl" />
        </div>
      </div>
    </header> 
  );
}

export default Header;
