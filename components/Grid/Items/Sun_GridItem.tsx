import React, { useState } from 'react';
import type {
  CurrentConditionData,
  FivedaysFcstData,
} from '../../../graphql/types/queryDatatypes';
import { BsSunsetFill, BsSunriseFill } from 'react-icons/bs';
import timeConv from '../../../utils/timeConv';

interface Sun_GridItemProps {
  currentConditionData: CurrentConditionData;
  fivedaysFcstData: FivedaysFcstData;
}
const Sun_GridItem = ({
  currentConditionData,
  fivedaysFcstData,
}: Sun_GridItemProps) => {
  const { IsDayTime } = currentConditionData.getCurrentCondition;
  const sunriseTime = timeConv(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Rise,
    true
  );
  const sunsetTime = timeConv(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Set,
    true
  );

  return (
    <>
      {IsDayTime ? (
        <>
          <div className="grid-title">
            <BsSunsetFill className="mr-0.5" size={15} />
            일몰
          </div>
          <span className="text-2xl">{sunsetTime}</span>
        </>
      ) : (
        <>
          <div className="grid-title">
            <BsSunriseFill className="mr-0.5" size={15} />
            일출
          </div>
          <span className="text-2xl">{sunriseTime}</span>
        </>
      )}
    </>
  );
};

export default Sun_GridItem;
