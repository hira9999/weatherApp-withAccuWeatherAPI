import React from 'react';

const Sun = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50">
      <img
        src="sunlight.png"
        alt="sunlight"
        className="absolute w-full h-[30%] sm:h-full opacity-100 scale-x-[-1]"
      />
    </div>
  );
};

export default Sun;
