import React from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { CiTempHigh } from 'react-icons/ci';

interface ApparentTemperature_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const ApparentTemperature_GridItem = ({
  currentConditionData,
}: ApparentTemperature_GridItemProps) => {
  const apparentTemp = Math.round(
    currentConditionData.getCurrentCondition.ApparentTemperature.Metric.Value
  );

  return (
    <>
      <div className="grid-title">
        <CiTempHigh className="mr-0.5" size={14} />
        체감온도
      </div>
      <span className="text-3xl">{apparentTemp}°</span>
    </>
  );
};

export default ApparentTemperature_GridItem;
