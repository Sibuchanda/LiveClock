import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Add this line

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full p-4 bg-gray-900 flex justify-center shadow-lg fixed top-0 left-0 right-0">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow mt-20">
        {/* Date Section */}
        <p className="mt-10 text-2xl font-bold max-[300px]:text-xl">Date : {new Date().toDateString()}</p>

        {/* Live Clock Button */}
        <button onClick={() => navigate('/liveclock')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300 shadow-lg cursor-pointer">
          Start Live Clock
        </button>
      </div>
    </div>
  );
};

export default Home;
