import React, { useState } from 'react';
import type {
  CurrentConditionData,
  PrecipitationSummary,
} from '../../../graphql/types/queryDatatypes';
import { GiWaterDrop } from 'react-icons/gi';

interface Precipitation_GridItemProps {
  currentConditionData: CurrentConditionData;
}
const Precipitation_GridItem = ({
  currentConditionData,
}: Precipitation_GridItemProps) => {
  const summary = currentConditionData.getCurrentCondition.PrecipitationSummary;

  const getMaxPrecipitationPastHour = (precipitation: PrecipitationSummary) => {
    let maxMetricValue = -Infinity;
    let maxPastHour;

    for (const [key, value] of Object.entries(precipitation)) {
      if (key.startsWith('Past') && value.Metric.Value > maxMetricValue) {
        maxMetricValue = value.Metric.Value;
        maxPastHour = {
          value,
          key: '지난 ' + Number(key.replace(/[^0-9]/g, '')) + '시간',
        };
      }
    }

    return maxPastHour;
  };

  const maxPrecipitationPastHour = getMaxPrecipitationPastHour(summary);

  return (
    <>
      <div className="grid-title">
        <GiWaterDrop className="mr-0.5" size={12} />
        강수량
      </div>
      <div className="flex flex-col">
        <span className="text-3xl">
          {Math.round(maxPrecipitationPastHour?.value.Metric.Value)}mm
        </span>
        <span className="text-lg">{maxPrecipitationPastHour?.key}</span>
      </div>
    </>
  );
};

export default Precipitation_GridItem;
