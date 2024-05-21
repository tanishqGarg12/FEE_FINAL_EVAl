import React from 'react';

const SSmallCircle = ({ans}) => {
  return (
    <div className="rounded-full bg-cover bg-center border-4  size-72 justify-center items-center">
        
        <div className="flex flex-col justify-center items-center mt-16">
        <p className='text-8xl font-bold text-white'>{ans.number}</p>
        <p className='text-white font-bold mt-2'>{ans.stringValue}</p>
        </div>

      
    </div>
  );
}

export default SSmallCircle;
