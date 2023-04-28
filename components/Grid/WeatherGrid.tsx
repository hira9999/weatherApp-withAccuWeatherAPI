import React from 'react';
import TwelveHoursFcst_GridItem from './TwelveHoursFcst_GridItem';
import type {
  CurrentConditionData,
  TwelveHoursFcstData,
  FivedaysFcstData,
} from '../../graphql/types/queryDatatypes';
import AirQuality_GridItem from './AirQuality_GridItem';
import FivedaysFcst_GridItem from './FivedaysFcst_GridItem';
import UVindex_GridItem from './UVindex_GridItem';
import Visibility_GridItem from './Visibility_GridItem';
import ApparentTemperature_GridItem from './ApparentTemperature_GridItem';
import RelativeHumidity_GridItem from './RelativeHumidity_GridItem';
import Pressure_GridItem from './Pressure_GridItem';
import Precipitation_GridItem from './Precipitation_GridItem';
import Wind_GridItem from './Wind_GridItem';
import Sun_GridItem from './Sun_GridItem';

interface GridProps {
  currentConditionData: CurrentConditionData;
  twelveHoursFcstData: TwelveHoursFcstData;
  fivedaysFcstData: FivedaysFcstData;
  CIAaverage: number;
}

const WeatherGrid = ({
  currentConditionData,
  twelveHoursFcstData,
  fivedaysFcstData,
  CIAaverage,
}: GridProps) => {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-[8px] text-sm">
      <TwelveHoursFcst_GridItem
        twelveHoursFcstData={twelveHoursFcstData}
        fivedaysFcstData={fivedaysFcstData}
      />
      <AirQuality_GridItem CIAaverage={CIAaverage} />
      <FivedaysFcst_GridItem fivedaysFcstData={fivedaysFcstData} />
      <Precipitation_GridItem currentConditionData={currentConditionData} />

      <Pressure_GridItem currentConditionData={currentConditionData} />
      <Wind_GridItem currentConditionData={currentConditionData} />
      <Sun_GridItem
        currentConditionData={currentConditionData}
        fivedaysFcstData={fivedaysFcstData}
      />
      <UVindex_GridItem currentConditionData={currentConditionData} />
      <Visibility_GridItem currentConditionData={currentConditionData} />
      <ApparentTemperature_GridItem
        currentConditionData={currentConditionData}
      />
      <RelativeHumidity_GridItem currentConditionData={currentConditionData} />
    </div>
  );
};

export default WeatherGrid;
