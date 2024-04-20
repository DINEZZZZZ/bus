import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBus } from 'react-icons/fa';

const SigninForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/bus/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulating authentication
        if (username === 'School' && password === 'School@123') {
            // Successful login
            console.log('Signin successful');
            navigate('/bus/home');
        } else {
            // Invalid credentials
            console.error('Signin failed: Invalid credentials');
            setError('Invalid credentials');
        }
        setLoading(false);
    };

    return (
        <div>
            <div className='flex bg-yellow-600 justify-between items-center px-2 py-2'>
                <span onClick={navigateTo} className='text-2xl '><FaArrowLeft /></span>
                <h1 className="text-3xl font-bold text-center mb-2">School Login</h1>
                <span className='text-2xl'><FaBus /></span>
            </div>
            <img className='w-full h-60' src='https://tse3.mm.bing.net/th?id=OIP.m46mHgu3TkjfH5cc7w8jQwHaE3&pid=Api&P=0&h=180' alt="" />


            <form className="mx-auto max-w-md bg-white shadow-md rounded px-8 mb-4" onSubmit={handleSubmit}>
                <div className='flex justify-center'>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Side-View-School-Bus-Transparent.png" alt="" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        User
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="UserName"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
            <img src='https://webstockreview.net/images/garden-clipart-front-yard-8.png' alt="" />
        </div>
    );
};

export default SigninForm;
