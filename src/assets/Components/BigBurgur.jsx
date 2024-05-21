import React from 'react';
import CommonR from './CommonR';
import CircleImage from './CircleImage';
import backgroundImage from "../Assets/Design.png";

const BigBurgur = () => {
  return (
    <div className="bg-cover bg-center min-h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center p-4 md:p-8 space-y-8 md:space-y-0 md:space-x-16" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <CommonR />
      <CircleImage />
    </div>
  );
}

export default BigBurgur;
