import React from 'react';
import backgroundImage from "../Assets/Design.png";
import Card from './Card';

const Package = () => {
  const obj=[
    {
      number:"Package 1",
      stringValue:"ncj cjdw cjkd cnvj v vdnk",
    },
    {
      number:"Package 2",
      stringValue:"jcdjkc djkc jck cnd ckd ",
    },
    {
      number:"Package 3",
      stringValue:"cje cj ecjdckd kd",
    },
  ];

  return (
    <div className='bg-cover bg-center h-auto mb-7 sm:h-screen w-full flex flex-col justify-center items-center' style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className='text-4xl font-bold text-red-600 md:text-6xl'>POPULAR PACKAGE</div>
      <div className='flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-14 mt-10'>
        {obj.map((item, index) => (
          <div key={index} className="w-full sm:w-auto">
            <Card ans={item}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Package;
