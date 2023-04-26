import type { NextPage } from 'next';
import type {
  Location,
  LatLng,
  CurrentConditionData,
  LocationKey,
  TwelveHoursFcstData,
  FivedaysFcstData,
  AirQualityVariables,
  KhaiValueData,
} from '../types/queryDatatype';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  GEOPOSITION_SEARCH_QUERY,
  CURRENTCONDITIONS_QUERY,
  FIVEDAYS_FCST_QUERY,
  TWELVEHOURS_FCST_QUERY,
  AIR_QUALITY_KHAIVALUES_QUERY,
} from '../graphql/client/queryClient';

import Title from './components/Common/Title';
import WeatherGrid from './components/Grid/WeatherGrid';
import cityNameConv from '../utils/cityNameConv';
import calculateCIAverage from '../utils/calculateCIAverage';
import ErrorBar from './components/Common/ErrorBar';
import { MoonLoader } from 'react-spinners';
import Header from './components/Common/Header';

const Home: NextPage = () => {
  const [geolocationPositionError, setGeolocationPositionError] = useState<
    GeolocationPositionError | undefined
  >(undefined);
  const [navigatorPermission, setNavigatorPermission] =
    useState<boolean>(false);
  const [
    getLocation,
    {
      data: LocationData,
      loading: locationDataLoading,
      error: locationDataError,
      called: locationDataCalled,
    },
  ] = useLazyQuery<Location, LatLng>(GEOPOSITION_SEARCH_QUERY, {
    onCompleted: (data) => {
      const key = data.getLocation.Key;
      const locationNameConverted = cityNameConv(
        data.getLocation.LocalizedName
      );

      localStorage.setItem(
        'locationInfo',
        JSON.stringify({
          key,
          localizedName: data.getLocation.LocalizedName,
          administrativeArea: data.getLocation.AdministrativeArea.LocalizedName,
        })
      );

      //키를 패치완료후 쿼리 수동실행
      getKhaiValues({
        variables: { sidoName: locationNameConverted, locationKey: key },
      });
      getCurrentCondition({
        variables: { locationKey: key },
      });
      getFiveDaysFcst({
        variables: { locationKey: key },
      });
      getTwelveHoursFcst({
        variables: { locationKey: key },
      });
    },
  });

  const [
    getCurrentCondition,
    {
      data: currentConditionData,
      loading: currentConditionDataLoading,
      called: currentConditionDataCalled,
      error: currentConditionDataError,
      refetch: currentConditionRefetch,
    },
  ] = useLazyQuery<CurrentConditionData, LocationKey>(CURRENTCONDITIONS_QUERY);

  const [
    getFiveDaysFcst,
    {
      data: fivedaysFcstData,
      loading: fivedaysFcstDataLoading,
      called: fivedaysFcstDataCalled,
      error: fiveDaysFcstDataError,
      refetch: fivedaysFcstDataRefetch,
    },
  ] = useLazyQuery<FivedaysFcstData, LocationKey>(FIVEDAYS_FCST_QUERY);

  const [
    getTwelveHoursFcst,
    {
      data: twelveHoursFcstData,
      loading: twelveHoursFcstDataLoading,
      called: twelveHoursFcstDataCalled,
      error: twelveHoursFcstDataError,
      refetch: twelveHoursFcstRefetch,
    },
  ] = useLazyQuery<TwelveHoursFcstData, LocationKey>(TWELVEHOURS_FCST_QUERY);

  const [
    getKhaiValues,
    {
      data: KhaiValuesData,
      loading: KhaiValuesDataLoading,
      called: KhaiValuesDataCalled,
      error: KhaiValuesDataError,
      refetch: KhaiValuesRefetch,
    },
  ] = useLazyQuery<KhaiValueData, AirQualityVariables>(
    AIR_QUALITY_KHAIVALUES_QUERY
  );

  const getWeatherWithLocationFisrt = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    getLocation({
      variables: {
        latLng: {
          lat: latitude,
          lng: longitude,
        },
      },
    });
  };

  const getWeatherByLocationInfo = async (locationInfo: string) => {
    const { key, localizedName, administrativeArea } = JSON.parse(locationInfo);
    const locationNameConverted = cityNameConv(localizedName);
    getKhaiValues({
      variables: { sidoName: locationNameConverted, locationKey: key },
    });
    getCurrentCondition({
      variables: { locationKey: key },
    });
    getFiveDaysFcst({
      variables: { locationKey: key },
    });
    getTwelveHoursFcst({
      variables: { locationKey: key },
    });
  };

  useEffect(() => {
    const locationInfo = localStorage.getItem('locationInfo');
    if (locationInfo) {
      getWeatherByLocationInfo(locationInfo);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          getWeatherWithLocationFisrt(position);
        },
        (error) => {
          setGeolocationPositionError(error);
        }
      );
    }
  }, [navigatorPermission]);

  const CIAaverage = calculateCIAverage(
    KhaiValuesData?.getCtprvnRltmMesureDnsty?.khaiValues
  );

  const daytimeColor = {
    dawn: 'from-[#1B2A4A] to-[#7D6180]',
    night: 'from-[#05051C] to-[#334461]',
    day: 'from-[#094F91] to-[#ABC9E8]',
  };

  const IsDayTime = currentConditionData?.getCurrentCondition;

  const handlePermissionChange = () => {
    navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
      if (permission.state === 'granted') {
        setNavigatorPermission(true);
        setGeolocationPositionError(undefined);
        return;
      }
      setNavigatorPermission(false);
    });
  };

  const allQueriesCompleted =
    currentConditionData &&
    fivedaysFcstData &&
    twelveHoursFcstData &&
    CIAaverage;

  const queryErrors = [
    locationDataError,
    currentConditionDataError,
    fiveDaysFcstDataError,
    twelveHoursFcstDataError,
    KhaiValuesDataError,
  ].filter(Boolean);

  if (queryErrors.length > 0) {
    const firstError = queryErrors[0];
    throw new ApolloError(firstError!);
  }

  return (
    <div
      className={`${daytimeColor[IsDayTime ? 'day' : 'night']} ${
        daytimeColor['day']
      } h-full bg-gradient-to-b text-lg overflow-y-hidden`}
    >
      {/* 에러가 있을때만 보여주는 에러바 입니다. */}
      <ErrorBar
        error={geolocationPositionError}
        handlePermissionChange={handlePermissionChange}
      />
      <Header />

      <div className="flex justify-center items-center h-full w-[980px] mx-auto">
        {allQueriesCompleted ? (
          <div className="flex flex-col justify-center w-full h-full px-[20px]">
            <Title
              currentConditionData={currentConditionData}
              fivedaysFcstData={fivedaysFcstData}
            />
            <WeatherGrid
              currentConditionData={currentConditionData}
              twelveHoursFcstData={twelveHoursFcstData}
              fivedaysFcstData={fivedaysFcstData}
              CIAaverage={CIAaverage}
            />
          </div>
        ) : (
          <MoonLoader />
        )}
      </div>
    </div>
  );
};

export default Home;
