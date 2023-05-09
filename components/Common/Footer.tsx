import React from 'react';

const Footer = () => {
  return (
    <div className="absolute bottom-2 left-[10%] sm:left-[40%] text-xs sm:text-sm space-x-3">
      <span>
        대기질 데이터 제공:
        <a className="underline" href="https://www.airkorea.or.kr/web/">
          AirKorea
        </a>
      </span>
      <span>
        날씨 데이터 제공:
        <a
          className="underline"
          href="https://www.accuweather.com/ko/kr/south-korea-weather"
        >
          AccuWeather
        </a>
      </span>
    </div>
  );
};

export default Footer;
