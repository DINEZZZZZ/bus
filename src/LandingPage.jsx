import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div   className="flex justify-center items-center  h-screen">
      
      <div className="container h-full mx-auto  " >
        
        
     
      <img className='w-full h-72' src='https://tse3.mm.bing.net/th?id=OIP.m46mHgu3TkjfH5cc7w8jQwHaE3&pid=Api&P=0&h=180' alt="" />
      <h1 className="text-4xl text-center font-bold mb-5">Welcome to our App!</h1>
      <p className='text-center font-semibold text-lg mb-1'>Students Security Scanner</p>
        <div className='flex justify-center '>
          
        
        <img src="https://www.pngall.com/wp-content/uploads/4/Side-View-School-Bus-Transparent.png" alt="" />
        </div>
        

        <p className="text-2xl font-semibold text-center mt-6 mb-6">Choose to explore!</p>
        <div className="flex flex-row justify-center gap-4">
          <Link to="/bus/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            School Login
          </Link>
          <Link to="/bus/signinAdmin" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Admin
          </Link>
          <Link to="/bus/Parent" className="bg-rose-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Parent Login
          </Link>
          
        </div >
        <img src='https://webstockreview.net/images/garden-clipart-front-yard-8.png' alt="" />
      </div>
      
    </div>
  );
};

export default LandingPage;
