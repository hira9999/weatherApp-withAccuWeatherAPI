import React from 'react';
import { FivedaysFcstData } from '../../../types/queryDatatype';
import { AiTwotoneCalendar } from 'react-icons/ai';
import getDayOfWeek from '../../../utils/getDayOfWeek';
import getFivdaysMinMaxTemp from '../../../utils/getFivedaysMinMaxTemp';
import WeatherIcon from '../Common/WeatherIcon';

interface FivedaysFcstProps {
  fivedaysFcstData: FivedaysFcstData;
}

const FivedaysFcst_GridItem = ({ fivedaysFcstData }: FivedaysFcstProps) => {
  const { tempMin, tempMax } = getFivdaysMinMaxTemp(fivedaysFcstData);

  return (
    <div className="col-span-2 row-span-2 h-full grid-item pb-0">
      <div className="grid-title border-b-[1px] border-white/50 pb-2 m-0">
        <AiTwotoneCalendar className="mr-1" size={15} />
        5일간 예보
      </div>
      <ul className="flex flex-col h-full">
        {fivedaysFcstData.getFiveDaysFcst.DailyForecasts.map((dayFcst) => {
          const dayWeekStr = getDayOfWeek(dayFcst.Date);
          const tempMinimum = dayFcst.Temperature.Minimum.Value;
          const tempMaximum = dayFcst.Temperature.Maximum.Value;

          // 온도계를 가리기위한 요소의 길이를 백분율한값
          const percentMin =
            ((tempMinimum - tempMin) / (tempMax - tempMin)) * 100;
          const percentMax =
            ((tempMaximum - tempMin) / (tempMax - tempMin)) * 100;

          const weatherIconProps = {
            PrecipitationProbability: Math.max(
              dayFcst.Day.PrecipitationProbability,
              dayFcst.Night.PrecipitationProbability
            ),
            ThunderstormProbability: Math.max(
              dayFcst.Day.ThunderstormProbability,
              dayFcst.Night.ThunderstormProbability
            ),
            RainProbability: Math.max(
              dayFcst.Day.RainProbability,
              dayFcst.Night.RainProbability
            ),
            SnowProbability: Math.max(
              dayFcst.Day.SnowProbability,
              dayFcst.Night.SnowProbability
            ),
            HasPrecipitation:
              dayFcst.Day.HasPrecipitation || dayFcst.Night.HasPrecipitation,
            CloudCover: Math.max(
              dayFcst.Day.CloudCover,
              dayFcst.Night.CloudCover
            ),
            PrecipitationType:
              dayFcst.Day.PrecipitationType || dayFcst.Night.PrecipitationType,
          };

          return (
            <li
              key={dayFcst.Date}
              className="dayFcst-griditem items-center h-full border-b-[1px] border-white/50 last:border-none"
            >
              <span className="font-bold">{dayWeekStr}</span>
              <WeatherIcon {...weatherIconProps} />
              <div className="minmaxtemp">
                <span className="font-bold text-white/50">
                  {Math.round(tempMinimum)}°
                </span>
                <div className="flex justify-center items-center relative w-24 h-full">
                  <div className="relative w-full h-1 rounded-lg bg-white bg-tempSlide">
                    {/* 온도바의 범위를 가려 범위를 정하기위한 요소 */}
                    <div
                      className="absolute left-0 top-0 bg-[#737a81] h-1 rounded-l-lg"
                      style={{ width: `${Math.round(percentMin)}%` }}
                    />
                    <div
                      className="absolute right-0 top-0 bg-[#737a81] h-1 rounded-r-lg"
                      style={{ width: `${100 - Math.round(percentMax)}%` }}
                    />
                  </div>
                </div>
                <span className="font-bold text-opacity-50">
                  {Math.round(tempMaximum)}°
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FivedaysFcst_GridItem;
