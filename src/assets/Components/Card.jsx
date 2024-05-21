import React from 'react';
import backgroundImag from '../Assets/Icon.png';

const Card = ({ ans }) => {
  return (
    <div className="max-w-md mx-auto bg-slate-200 shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-6"> {/* Adjust padding for different screen sizes */}
        <div className="uppercase tracking-wide text-2xl font-bold text-center mb-4 text-red-600">
          {ans.number}
        </div>
        <img className="h-14 ml-16  md:h-auto object-cover md:ml-10 mb-4" src={backgroundImag} alt="Placeholder" />
        <p className="text-red-600 text-center">{ans.stringValue}</p>
        <p className="text-red-600 mb-4 text-center">{ans.stringValue}</p>
        <button className="bg-red-500 text-white rounded-full font-bold py-2 px-4 h-12 w-48">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Card;
