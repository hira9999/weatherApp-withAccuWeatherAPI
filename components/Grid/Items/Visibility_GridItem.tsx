import React from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { IoEyeSharp } from 'react-icons/io5';

interface Visibility_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const Visibility_GridItem = ({
  currentConditionData,
}: Visibility_GridItemProps) => {
  const visibility = Math.round(
    currentConditionData.getCurrentCondition.Visibility.Metric.Value
  );
  const { Unit } = currentConditionData.getCurrentCondition.Visibility.Metric;

  return (
    <>
      <div className="grid-title">
        <IoEyeSharp className="mr-1" size={15} />
        가시거리
      </div>
      <span className="text-3xl">
        {visibility}
        {Unit}
      </span>
    </>
  );
};

export default Visibility_GridItem;
