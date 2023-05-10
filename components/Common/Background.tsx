import React, { type ReactNode } from 'react';
import getCurrentSkyColor from '../../utils/getCurrentSkyColor';
import type {
  CurrentConditionData,
  FivedaysFcstData,
} from '../../graphql/types/queryDatatypes';
import Sun from './WeatherItemBG/Sun';
import Cloud from './WeatherItemBG/Cloud';
import Stars from './WeatherItemBG/Stars';
import Rain from './WeatherItemBG/Rain';
import Snow from './WeatherItemBG/Snow';

interface BackgroundProps {
  currentConditionData: CurrentConditionData;
  fivedaysFcstData: FivedaysFcstData;
  children: ReactNode;
}

const Background = ({
  currentConditionData,
  fivedaysFcstData,
  children,
}: BackgroundProps) => {
  const skyColor = getCurrentSkyColor(
    currentConditionData?.getCurrentCondition,
    fivedaysFcstData?.getFiveDaysFcst
  );

  const isDayTime = currentConditionData.getCurrentCondition.IsDayTime;
  const cloudCover = currentConditionData.getCurrentCondition.CloudCover;
  const precipitationType =
    currentConditionData.getCurrentCondition.PrecipitationType;
  const pasthourPrecipitation =
    currentConditionData.getCurrentCondition.PrecipitationSummary.PastHour
      .Metric.Value;
  const UVindex = currentConditionData.getCurrentCondition.UVIndex;
  return (
    <div
      className="w-full text-lg overflow-scroll sm:overflow-y-hidden relative"
      style={{
        background: `linear-gradient(${skyColor})`,
      }}
    >
      <Sun UVindex={UVindex} />
      {!isDayTime && <Stars />}
      {cloudCover > 30 && <Cloud cloudCover={cloudCover} />}
      {precipitationType === 'Rain' && <Rain />}
      {precipitationType === 'Snow' && <Snow />}
      {children}
    </div>
  );
};

export default Background;
