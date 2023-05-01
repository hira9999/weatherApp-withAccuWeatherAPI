import React from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { WiHumidity } from 'react-icons/wi';

interface RelativeHumidity_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const RelativeHumidity_GridItem = ({
  currentConditionData,
}: RelativeHumidity_GridItemProps) => {
  return (
    <>
      <div className="grid-title">
        <WiHumidity className="" size={15} />
        습도
      </div>
      <span className="text-3xl">
        {currentConditionData.getCurrentCondition.RelativeHumidity}%
      </span>
    </>
  );
};

export default RelativeHumidity_GridItem;
