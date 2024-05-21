import React from 'react';
import backgroundImage from "../Assets/Design.png";

const Update = () => {
  return (
    <div className='bg-cover bg-center h-screen w-full flex flex-col justify-center items-center' style={{backgroundImage: `url(${backgroundImage})`}}>
      {/* Text */}
      <div className='text-4xl md:text-6xl font-bold text-red-500'>Don't miss Our Update</div>
      <div className="mx-auto max-w-5xl p-6 text-center mb-8">

        <h1 className="text-2xl font-bold mb-4 text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque ad, magni aliquid beatae officia excepturi quo velit fugiat dolores veniam corporis quod tempora vitae. Temporibus, incidunt sapiente. Voluptatum, numquam.</h1>
      </div>
      
      {/* Search Bar and Button */}
      <div className="flex items-center">
  <input
    type="text"
    placeholder="Enter Your Email"
    className="w-full md:w-64 lg:w-80 xl:w-96 px-4 py-3 border border-gray-300 rounded-l-md shadow-md focus:outline-none focus:border-orange-500"
    style={{ height: "3rem" }}
  />
  <button className="px-12 py-3 bg-red-500 text-white rounded-r-lg shadow-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600" style={{ height: "3rem" }}>
    Search=
  </button>
</div>

    </div>
  );
}

export default Update;
