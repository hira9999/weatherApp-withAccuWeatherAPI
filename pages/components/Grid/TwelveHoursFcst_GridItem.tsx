import React from 'react';
import timeConv from '../../../utils/timeConv';
import { BsSunsetFill, BsSunriseFill } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';
import type {
  FivedaysFcstData,
  TwelveHoursFcstData,
} from '../../../types/queryDatatype';
import WeatherIcon from '../Common/WeatherIcon';

interface TwelveFcstProps {
  twelveHoursFcstData: TwelveHoursFcstData;
  fivedaysFcstData: FivedaysFcstData;
}

const TwelveHoursFcst_GridItem = ({
  twelveHoursFcstData,
  fivedaysFcstData,
}: TwelveFcstProps) => {
  const { HoursFcsts } = twelveHoursFcstData.getTwelveHoursFcst;
  const sunsetDateStr =
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Set;
  const sunsetTimeHour = new Date(sunsetDateStr).getHours();
  const sunriseDateStr =
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Rise;
  const sunriseTimeHour = new Date(sunriseDateStr).getHours();

  return (
    <div className="col-span-4 row-span-1 grid-item">
      <div className="grid-title border-b-[1px] border-white/50 pb-2 m-0">
        <IoMdTime className="mr-1" size={15} />
        12시간 예보
      </div>
      <div className="h-full w-full overflow-scroll scrollbar-hide">
        <div className="flex -mx-3 w-[1000px] h-full">
          {HoursFcsts.map((hourFcst) => {
            const weatherIconProps = {
              PrecipitationProbability: hourFcst.PrecipitationProbability,
              ThunderstormProbability: hourFcst.ThunderstormProbability,
              RainProbability: hourFcst.RainProbability,
              SnowProbability: hourFcst.SnowProbability,
              HasPrecipitation: hourFcst.HasPrecipitation,
              CloudCover: hourFcst.CloudCover,
              IsDaylight: hourFcst.IsDaylight,
              PrecipitationType: hourFcst.PrecipitationType,
            };

            if (new Date(hourFcst.DateTime).getHours() == sunsetTimeHour) {
              return (
                <React.Fragment key={hourFcst.DateTime}>
                  <div className="flex flex-col w-full items-center justify-around">
                    <span>{timeConv(hourFcst.DateTime)}</span>
                    <WeatherIcon {...weatherIconProps} />
                    <span className="font-bold">
                      {Math.round(hourFcst.Temperature.Value)}°
                    </span>
                  </div>
                  <div className="flex flex-col w-full items-center justify-around pt-[2px]">
                    <span className="text-xs">
                      {timeConv(sunsetDateStr, true)}
                    </span>
                    <BsSunsetFill size={20} />
                    <span className="font-bold">일몰</span>
                  </div>
                </React.Fragment>
              );
            }

            if (new Date(hourFcst.DateTime).getHours() == sunriseTimeHour) {
              return (
                <React.Fragment key={hourFcst.DateTime}>
                  <div className="flex flex-col w-full items-center justify-around">
                    <span>{timeConv(hourFcst.DateTime)}</span>
                    <WeatherIcon {...weatherIconProps} />
                    <span className="font-bold">
                      {Math.round(hourFcst.Temperature.Value)}°
                    </span>
                  </div>
                  <div className="flex flex-col w-full items-center justify-around pt-[2px]">
                    <span className="text-xs">
                      {timeConv(sunriseDateStr, true)}
                    </span>
                    <BsSunriseFill size={20} />
                    <span className="font-bold">일출</span>
                  </div>
                </React.Fragment>
              );
            }

            return (
              <div
                key={hourFcst.DateTime}
                className="flex flex-col w-full items-center justify-around"
              >
                <span>{timeConv(hourFcst.DateTime)}</span>
                <WeatherIcon {...weatherIconProps} />
                <span className="font-bold">
                  {Math.round(hourFcst.Temperature.Value)}°
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TwelveHoursFcst_GridItem;
