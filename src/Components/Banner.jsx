import React from 'react';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  
  
  const fixedHeightStyle = {
    height: '250px',
  };

  return (
  
    <div className="bg-gray-100 py-20 px-20"> 
      
    
      <div 
        className="
          grid 
          grid-cols-1 md:grid-cols-2 
          gap-6
          mx-auto
          max-w-[1440px] 
        "
      >
        {/* --- In-Progress কার্ড --- */}
        <div 
          style={fixedHeightStyle} 
          className="
            relative 
            flex flex-col items-center justify-center 
            p-10 
            rounded-lg 
            shadow-xl 
            text-white 
            overflow-hidden
            gradient-bg-1 
            w-full 
          "
        >
          {/* কন্টেন্ট */}
          <h3 className="relative z-10 text-2xl md:text-3xl font-normal mb-2">
            In-Progress
          </h3>
          <p className="relative z-10 text-5xl md:text-4xl font-semibold ">
            {inProgressCount}
          </p>
        </div>

        {/* --- Resolved কার্ড --- */}
        <div 
          style={fixedHeightStyle} 
          className="
            relative 
            flex flex-col items-center justify-center 
            p-10 
            rounded-lg 
            shadow-xl 
            text-white 
            overflow-hidden
            gradient-bg-2 
            w-full 
          "
        >
          {/* কন্টেন্ট */}
          <h3 className="relative z-10 text-2xl md:text-3xl font-normal mb-2">
            Resolved
          </h3>
          <p className="relative z-10 text-5xl md:text-4xl font-semibold">
            {resolvedCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;