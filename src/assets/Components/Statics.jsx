import React from 'react';
import backgroundImage from "../Assets/Shape.png";
import SSmallCircle from './SSmallCircle';

const Statics = () => {
  const obj = [
    {
      number: "7K",
      stringValue: "CUSTOMER",
    },
    {
      number: "109",
      stringValue: "OUTLET",
    },
    {
      number: "35",
      stringValue: "COUNTRY",
    },
  ];
  return (
    <div className='bg-cover bg-center min-h-screen w-full flex flex-col justify-center items-center p-4 md:p-8' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className='text-4xl text-white font-bold md:text-6xl'>Statistics</p>
      <br />
      <div className='text-lg text-white md:text-2xl max-w-2xl text-center'>
        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit. Lorem ipsum.</p>
        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit.</p>
      </div>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-14 mt-10'>
        {obj.map((item, index) => (
          <div key={index} className='flex justify-center'>
            <SSmallCircle ans={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statics;
