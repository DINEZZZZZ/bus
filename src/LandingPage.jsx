import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center  h-screen bg-gray-100">
      <div className="container h-full mx-auto px-4 py-60" style={{backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.3VppdYL7ZgSP8CBftaDj0wHaD_&pid=Api&P=0&h=180)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h1 className="text-4xl text-center font-bold mb-10">Welcome to our App!</h1>
        <div className='flex justify-center '>
        
        <img src="https://tse1.mm.bing.net/th?id=OIP.ZBumfIZe3ZlL-vhW40nDXgHaGF&pid=Api&P=0&h=180" alt="" />
        </div>
        

        <p className="text-2xl text-center mt-6 mb-6">Choose to explore!</p>
        <div className="flex flex-row justify-center gap-4">
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </Link>
          <Link to="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
