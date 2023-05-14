import React from 'react';
import type {
  CurrentConditionData,
  FivedaysFcstData,
} from '../../graphql/types/queryDatatypes';

interface TitleProps {
  currentConditionData: CurrentConditionData;
  fivedaysFcstData: FivedaysFcstData;
  LocalizedName: string;
}

const Title = ({
  currentConditionData,
  fivedaysFcstData,
  LocalizedName,
}: TitleProps) => {
  const { Value } = currentConditionData.getCurrentCondition.Temperature.Metric;
  const { WeatherText } = currentConditionData?.getCurrentCondition;

  const MaximumTemp = Math.round(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Temperature.Maximum.Value
  );
  const MinimumTemp = Math.round(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Temperature.Minimum.Value
  );

  return (
    <div className="flex flex-col items-center space-y-1 mb-10">
      <h1 className="text-4xl shadowed-text">{LocalizedName}</h1>
      <h2 className="text-7xl shadowed-text font-extralight">
        {Math.round(Value)}°
      </h2>
      <h3 className="text-xl shadowed-text">{WeatherText}</h3>
      <span className="text-xl shadowed-text">{`최고${MaximumTemp}° 최저${MinimumTemp}°`}</span>
    </div>
  );
};

export default Title;
