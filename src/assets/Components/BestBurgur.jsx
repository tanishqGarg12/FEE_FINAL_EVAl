import React from 'react';
import backgroundImage from "../Assets/Shape.png";
import CircleImage from './CircleImage';
import CommonR from './CommonR';

const BestBurgur = () => {
  return (
    <div className="bg-cover bg-center h-screen md:h-screen  sm:h-screen w-full flex flex-col sm:flex-row justify-center items-center sm:space-x-8 lg:space-x-44" style={{backgroundImage: `url(${backgroundImage})`}}>
      <CircleImage></CircleImage>
      <CommonR></CommonR>
    </div>
  );
}

export default BestBurgur;
