import React, { useState } from 'react';
import icc from "../Assets/Icon.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full" style={{ 
      backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9999999999999999) 85%, rgba(0,0,0,0.9999999999999999) 100%)' 
    }}>

      <div className="flex justify-between items-center p-5">
      <div className='ml-6'><img src={icc} alt="" style={{ width: '60px', height: 'auto' }} /></div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <ul className={`font-bold text-lg md:flex md:space-x-16 md:mr-32 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="mt-2 md:mt-0 hover:text-blue-500 hover:shadow-lg"><a href="#">HOME</a></li>
          <li className="mt-2 md:mt-0 hover:text-blue-500 hover:shadow-lg"><a href="#">ABOUT</a></li>
          <li className="mt-2 md:mt-0 hover:text-blue-500 hover:shadow-lg"><a href="#">SERVICES</a></li>
          <li className="mt-2 md:mt-0 hover:text-blue-500 hover:shadow-lg"><a href="#">CONTACT</a></li>
          <li className="mt-2 md:mt-0  hover:text-blue-500 hover:shadow-lg"><a href="#">BLOG</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
