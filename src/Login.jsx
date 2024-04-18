import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';


const SigninForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const navigate = useNavigate();

const navigateTO = ()=>{
    navigate('/bus/')
 }

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const response = await axios.post('http://localhost:8080/api/user/signin', {
        username,
        password
    });
    console.log('Signin successful:', response.data);
    navigate('/bus/');
    
    } catch (error) {
        navigate('/bus/home');
    console.error('Signin failed:', error.response ? error.response.data : error.message);
    setError(error.response ? error.response.data.message : error.message);
    }
    setLoading(false);
};

return (
    <div >
      <div className='flex  justify-between px-6 py-2'> 
    
    <h1 className="text-3xl font-bold text-center  mb-2">   Login</h1>
    <span onClick={()=>navigateTO()} className='text-2xl '><FaArrowLeft/></span> 
    
    </div>
    <form style={{backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200410/pngtree-creative-cartoon-hand-drawn-sky-clouds-image_333701.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="mx-auto max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email:
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        disabled={loading}
        >
        {loading ? 'Signing in...' : 'Sign In'}
        </button>
    </form>
    </div>
);
};

export default SigninForm;
