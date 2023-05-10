import React from 'react';

interface CloudProps {
  cloudCover?: number;
}

const Cloud = ({ cloudCover }: CloudProps) => {
  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50">
      <img
        src="/asset/cloud1.png"
        className="cloud"
        style={
          { '--i': 1, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
      />
      <img
        src="/asset/cloud2.png"
        className="cloud"
        style={
          { '--i': 2, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
      />
      <img
        src="/asset/cloud3.png"
        className="cloud"
        style={
          { '--i': 3, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
      />
      <img
        src="/asset/cloud4.png"
        className="cloud"
        style={
          { '--i': 4, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
      />
      <img
        src="/asset/cloud5.png"
        className="cloud"
        style={
          { '--i': 5, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
      />
    </div>
  );
};

export default Cloud;
