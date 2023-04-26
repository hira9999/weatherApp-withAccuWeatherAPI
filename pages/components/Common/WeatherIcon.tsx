import React from 'react';
import {
  BsFillSunFill,
  BsFillCloudFill,
  BsFillCloudRainFill,
  BsFillCloudSnowFill,
  BsFillMoonStarsFill,
  BsFillCloudSunFill,
  BsCloudMoonFill,
} from 'react-icons/bs';
import { IoThunderstorm } from 'react-icons/io5';

interface WeatherIconProps {
  HasPrecipitation: boolean;
  CloudCover: number;
  PrecipitationProbability: number;
  RainProbability: number;
  SnowProbability: number;
  ThunderstormProbability: number;
  IsDaylight?: boolean;
  PrecipitationType: string;
}

const WeatherIcon = ({
  HasPrecipitation,
  CloudCover,
  PrecipitationProbability,
  RainProbability,
  SnowProbability,
  ThunderstormProbability,
  PrecipitationType,
  IsDaylight,
}: WeatherIconProps) => {
  const roundToNearestTen = (num: number) => {
    return Math.round(num / 10) * 10;
  };

  //강수있음
  if (HasPrecipitation && PrecipitationType && PrecipitationProbability >= 30) {
    switch (PrecipitationType) {
      case 'Rain':
        return ThunderstormProbability >= 30 ? (
          //천둥번개동반
          <div className="flex flex-col">
            <IoThunderstorm size={20} />
            <span className="text-xs text-[#5AC8F5]">
              {roundToNearestTen(RainProbability)}%
            </span>
          </div>
        ) : (
          //천둥번개동반x
          <div className="flex flex-col">
            <BsFillCloudRainFill size={20} />
            <span className="text-xs text-[#5AC8F5]">
              {roundToNearestTen(RainProbability)}%
            </span>
          </div>
        );

      case 'Snow':
        return (
          <div className="flex flex-col">
            <BsFillCloudSnowFill size={20} />
            <span className="text-xs text-[#5AC8F5]">
              {roundToNearestTen(SnowProbability)}%
            </span>
          </div>
        );
    }
  }

  //강수없음
  switch (typeof IsDaylight) {
    case 'undefined':
      return CloudCover >= 70 ? (
        <BsFillCloudFill size={20} />
      ) : (
        <BsFillSunFill fill="#FFD609" size={20} />
      );
    case 'boolean':
      return IsDaylight ? (
        CloudCover >= 70 ? (
          <BsFillCloudFill size={20} />
        ) : (
          <BsFillSunFill fill="#FFD609" size={20} />
        )
      ) : CloudCover >= 70 ? (
        <BsFillCloudFill size={20} />
      ) : (
        <BsFillMoonStarsFill size={18} />
      );
    default:
      return <BsFillSunFill fill="#FFD609" size={20} />;
  }
};

export default WeatherIcon;
