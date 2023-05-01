import React from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { IoStopwatchSharp } from 'react-icons/io5';

interface Pressure_GridItemProps {
  currentConditionData: CurrentConditionData;
}
const Pressure_GridItem = ({
  currentConditionData,
}: Pressure_GridItemProps) => {
  return (
    <>
      <div className="grid-title">
        <IoStopwatchSharp className="mr-0.5" size={14} />
        기압
      </div>
      <span className="text-2xl">
        {Math.round(
          currentConditionData.getCurrentCondition.Pressure.Metric.Value
        )}
        hPa
      </span>
    </>
  );
};

export default Pressure_GridItem;
