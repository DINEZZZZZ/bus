import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faQrcode, faBus, faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';

const AdminConsole = () => {
  const navigate = useNavigate();

  const navigateToHighlightsPage = () => {
    navigate('/bus/admin');
  };

  const navigateToQRcreate = () => {
    navigate('/bus/add-student');
  };

  const navigateToBusDetails = () => {
    navigate('/bus/bus');
  };

  const navigateToDriverDetails = () => {
    navigate('/bus/driver');
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-10 space-y-6">
        <div
          className="highlight w-full bg-blue-200 p-8 rounded-md cursor-pointer flex items-center justify-center"
          onClick={navigateToHighlightsPage}
        >
          <FontAwesomeIcon icon={faUsers} className="text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Students Details and Tracking Information</h2>
        </div>
        <div
          className="highlight w-full bg-yellow-200 p-8 rounded-md cursor-pointer flex items-center justify-center"
          onClick={navigateToQRcreate}
        >
          <FontAwesomeIcon icon={faQrcode} className="text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Unique QR Maker For Students</h2>
        </div>
        <div
          className="highlight w-full bg-green-200 p-8 rounded-md cursor-pointer flex items-center justify-center"
          onClick={navigateToBusDetails}
        >
          <FontAwesomeIcon icon={faBus} className="text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Bus Details Of School Buses</h2>
        </div>
        <div
          className="highlight w-full bg-red-200 p-8 rounded-md cursor-pointer flex items-center justify-center"
          onClick={navigateToDriverDetails}
        >
          <FontAwesomeIcon icon={faUser} className="text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Driver Details Of School Buses</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminConsole;
