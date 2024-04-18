import React from 'react';


import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft, FaDatabase } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';


const AdminConsole = () => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
   
    navigate('/home');
  };

  const navigateToHighlightsPage = () => {
    navigate('/admin');
  };
  const navigateToQRcreate = () => {
    navigate('/add-student');
  };
  return (
    <div>

<Navbar/>
      <div className="highlight bg-blue-200 p-12 rounded-md cursor-pointer mt-10" onClick={navigateToHighlightsPage}>
        <h2 className="text-2xl font-semibold text-center">Students Details and Tracking Information</h2>
      </div>
      <div className="highlight bg-yellow-200 p-12 rounded-md mt-10">
        <h2 className="text-2xl font-semibold text-center" onClick={navigateToQRcreate}>QR Maker For Students</h2>
      </div>
      <div className="highlight bg-green-200 p-12 rounded-md mt-10">
        <h2 className="text-2xl font-semibold text-center">Add more</h2>
      </div>
      <div className="highlight bg-red-200 p-12 rounded-md cursor-pointer mt-10" >
        <h2 className="text-2xl font-semibold text-center">Add more</h2>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminConsole;