import React from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { BsFillSunFill } from 'react-icons/bs';

interface UVindex_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const UVindex_GridItem = ({ currentConditionData }: UVindex_GridItemProps) => {
  const { UVIndex } = currentConditionData.getCurrentCondition;

  return (
    <>
      <div className="flex flex-col">
        <div className="grid-title">
          <BsFillSunFill className="mr-1" size={12} />
          자외선 지수
        </div>
        <span className=" text-3xl">{UVIndex}</span>
        <span className="text-xl">
          {currentConditionData.getCurrentCondition.UVIndexText}
        </span>
      </div>
      <input type="range" min={0} max={11} value={UVIndex} readOnly />
    </>
  );
};

export default UVindex_GridItem;
