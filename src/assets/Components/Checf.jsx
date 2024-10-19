import React from 'react';
import backgroundImage from "../Assets/Design.png";
import SmallCircle from './SmallCircle';

const Checf = () => {
  return (
    <div className='bg-cover bg-center min-h-screen w-full flex flex-col justify-center items-center p-4 md:p-8' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className='text-8xl text-bold font-semi-bold md:text-8xl md:font-bold mt-4 text-red-500'>
        OUR OWNERS
      </p>
      <p className='text-lg md:text-3xl mt-9 text-center text-red-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..
      </p>
      <p className='text-lg md:text-3xl  text-center text-red-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='mt-8'>
        <SmallCircle />
      </div>
    </div>
  );
}

export default Checf;
