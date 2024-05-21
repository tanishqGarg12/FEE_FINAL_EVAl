import React from 'react';
import backgroundImage from "../Assets/Free.png";
import overlayImage from "../Assets/Shape.png"; // Assuming you have another background image for the overlay

const Freee = () => {
    return (
      <div className='relative bg-cover bg-center h-full w-full flex text-center justify-center items-center' style={{backgroundImage: `url(${backgroundImage})`}}>
        {/* Main Background Image */}
        
        {/* Overlay image */}
        <div className="absolute inset-0 flex justify-center items-center w-full">
          {/* Absolute positioning to cover the entire parent */}
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${overlayImage})`, opacity: 0.7}}>
            {/* Container to hold content with left and right margin */}
            <div className="mx-auto max-w-5xl p-6 text-center m-44">
              {/* Overlay Image */}
              {/* Text */}
              <h1 className="text-white text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque ad, magni aliquid beatae officia excepturi quo velit fugiat dolores veniam corporis quod tempora vitae. Temporibus, incidunt sapiente. Voluptatum, numquam.</h1>
              <h1 className="text-white text-5xl font-bold mt-10">TANISHQ AGGARWAL</h1>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Freee;
