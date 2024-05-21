import React from 'react';
import backgroundImage from "../Assets/Burgur.png";

const CircleImage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-full bg-cover bg-center bg-blue-500 w-80 h-80 mb-10 mr-12 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{backgroundImage: `url(${backgroundImage})`}}></div>
    </div>
  );
}

export default CircleImage;
