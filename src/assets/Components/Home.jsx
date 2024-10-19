import React from 'react'; // Import the image
import backgroundImage from "../Assets/home.png";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleStartNow = () => {
    navigate("/main"); // Navigate to the Main component when clicked
  };

  return (
    <div
      className="bg-cover bg-center text-white h-screen w-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className='flex-grow flex flex-col justify-center items-center h-auto mx-4 sm:mx-8 md:mx-14 lg:mx-20 lg:text-left'>
        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold  drop-shadow-lg tracking-wide'>
          CLICK ON
        </h1>
        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-black drop-shadow-lg tracking-wide'>
          START NOW
        </h1>
        
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-8 text-black text-center max-w-md leading-relaxed'>
         CLICK ON START NOW
        </p>
        
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl text-black text-center max-w-md leading-relaxed'>
          Join us today and start saving!
        </p>
        
        <button
          className='bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out w-56 h-16 sm:w-64 sm:h-20 md:w-72 md:h-24 lg:w-80 lg:h-24 xl:w-96 xl:h-12 border mt-5 rounded-full shadow-lg transform hover:scale-105'
          onClick={handleStartNow} // Handle click event
        >
          START NOW
        </button>
      </div>
    </div>
  );
}

export default Home;