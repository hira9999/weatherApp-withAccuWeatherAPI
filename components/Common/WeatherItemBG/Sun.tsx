import React from 'react';

interface SunProps {
  UVindex: number;
}

const Sun = ({ UVindex }: SunProps) => {
  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50">
      <img
        src="/asset/sunlight.png"
        alt="sunlight"
        className="absolute w-full h-[30%] sm:h-full opacity-100 scale-x-[-1]"
        style={{ opacity: `0.${UVindex}` }}
      />
    </div>
  );
};

export default Sun;
