import React from 'react';
import type {
  CurrentConditionData,
  TwelveHoursFcstData,
  FivedaysFcstData,
} from '../../graphql/types/queryDatatypes';
import TwelveHoursFcst_GridItem from './Items/TwelveHoursFcst_GridItem';
import AirQuality_GridItem from './Items/AirQuality_GridItem';
import FivedaysFcst_GridItem from './Items/FivedaysFcst_GridItem';
import UVindex_GridItem from './Items/UVindex_GridItem';
import Visibility_GridItem from './Items/Visibility_GridItem';
import ApparentTemperature_GridItem from './Items/ApparentTemperature_GridItem';
import RelativeHumidity_GridItem from './Items/RelativeHumidity_GridItem';
import Pressure_GridItem from './Items/Pressure_GridItem';
import Precipitation_GridItem from './Items/Precipitation_GridItem';
import Wind_GridItem from './Items/Wind_GridItem';
import Sun_GridItem from './Items/Sun_GridItem';
import WeatherGridLayout from './WeatherGridItemLayout';
import modalContent from '../../constant/gridModalContent';

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
    <div className="grid grid-cols-2 sm:grid-cols-6 sm:grid-rows-3 gap-[8px] text-sm">
      <TwelveHoursFcst_GridItem
        twelveHoursFcstData={twelveHoursFcstData}
        fivedaysFcstData={fivedaysFcstData}
      />
      <AirQuality_GridItem CIAaverage={CIAaverage} />
      <FivedaysFcst_GridItem fivedaysFcstData={fivedaysFcstData} />

      <WeatherGridLayout
        children={
          <Precipitation_GridItem currentConditionData={currentConditionData} />
        }
        modalContent={modalContent.Precipitation}
      />

      <WeatherGridLayout
        children={
          <Pressure_GridItem currentConditionData={currentConditionData} />
        }
        modalContent={modalContent.Pressure}
      />

      <WeatherGridLayout
        children={<Wind_GridItem currentConditionData={currentConditionData} />}
        modalContent={modalContent.Wind}
      />

      <WeatherGridLayout
        children={
          <Sun_GridItem
            currentConditionData={currentConditionData}
            fivedaysFcstData={fivedaysFcstData}
          />
        }
        modalContent={modalContent.Sun}
      />

      <WeatherGridLayout
        children={
          <UVindex_GridItem currentConditionData={currentConditionData} />
        }
        modalContent={modalContent.UVI}
      />

      <WeatherGridLayout
        children={
          <Visibility_GridItem currentConditionData={currentConditionData} />
        }
        modalContent={modalContent.Visibility}
      />

      <WeatherGridLayout
        children={
          <ApparentTemperature_GridItem
            currentConditionData={currentConditionData}
          />
        }
        modalContent={modalContent.ApparentTemp}
      />

      <WeatherGridLayout
        children={
          <RelativeHumidity_GridItem
            currentConditionData={currentConditionData}
          />
        }
        modalContent={modalContent.Humidity}
      />
    </div>
  );
};

export default WeatherGrid;
