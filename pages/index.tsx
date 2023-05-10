import type { GetServerSideProps, NextPage } from 'next';
import IP from 'ip';
import axios from 'axios';
import type {
  Location,
  LatLng,
  CurrentConditionData,
  LocationKey,
  TwelveHoursFcstData,
  FivedaysFcstData,
  AirQualityVariables,
  KhaiValueData,
} from '../graphql/types/queryDatatypes';
import { ApolloError, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  GEOPOSITION_SEARCH_QUERY,
  CURRENTCONDITIONS_QUERY,
  FIVEDAYS_FCST_QUERY,
  TWELVEHOURS_FCST_QUERY,
  AIR_QUALITY_KHAIVALUES_QUERY,
} from '../graphql/client/queryClient';

import Title from '../components/Common/Title';
import WeatherGrid from '../components/Grid/WeatherGrid';
import cityNameConv from '../utils/cityNameConv';
import calculateCIAverage from '../utils/calculateCIAverage';
import ErrorBar from '../components/Common/ErrorBar';
import { MoonLoader } from 'react-spinners';
import Header from '../components/Common/Header';
import Background from '../components/Common/Background';
import Footer from '../components/Common/Footer';

interface HomeServerSideProps {
  Key: string;
  LocalizedName: string;
  AdministrativeArea: string;
}

const Home: NextPage<HomeServerSideProps> = ({
  Key,
  LocalizedName,
  AdministrativeArea,
}) => {
  const [geolocationPositionError, setGeolocationPositionError] = useState<
    GeolocationPositionError | undefined
  >(undefined);
  const [navigatorPermission, setNavigatorPermission] =
    useState<boolean>(false);

  const [
    getLocation,
    {
      data: LocationData,
      error: locationDataError,
      refetch: locationDataRefetch,
    },
  ] = useLazyQuery<Location, LatLng>(GEOPOSITION_SEARCH_QUERY);

  const {
    data: currentConditionData,
    error: currentConditionDataError,
    refetch: currentConditionRefetch,
  } = useQuery<CurrentConditionData, LocationKey>(CURRENTCONDITIONS_QUERY, {
    variables: { locationKey: Key },
    pollInterval: 1000 * 60 * 60, // 60분마다 새로고침
  });

  const {
    data: fivedaysFcstData,
    error: fiveDaysFcstDataError,
    refetch: fivedaysFcstDataRefetch,
  } = useQuery<FivedaysFcstData, LocationKey>(FIVEDAYS_FCST_QUERY, {
    variables: { locationKey: Key },
  });

  const {
    data: twelveHoursFcstData,
    error: twelveHoursFcstDataError,
    refetch: twelveHoursFcstRefetch,
  } = useQuery<TwelveHoursFcstData, LocationKey>(TWELVEHOURS_FCST_QUERY, {
    variables: { locationKey: Key },
  });

  const {
    data: KhaiValuesData,
    error: KhaiValuesDataError,
    refetch: KhaiValuesRefetch,
  } = useQuery<KhaiValueData, AirQualityVariables>(
    AIR_QUALITY_KHAIVALUES_QUERY,
    { variables: { locationKey: Key, sidoName: cityNameConv(LocalizedName) } }
  );

  const refetchAllWeatherData = async (
    locationKey?: string,
    localizedName?: string
  ) => {
    if (locationKey && localizedName) {
      currentConditionRefetch({ locationKey });
      fivedaysFcstDataRefetch({ locationKey });
      twelveHoursFcstRefetch({ locationKey });
      KhaiValuesRefetch({ locationKey, sidoName: cityNameConv(localizedName) });
    } else {
      currentConditionRefetch();
      fivedaysFcstDataRefetch();
      twelveHoursFcstRefetch();
      KhaiValuesRefetch();
    }
  };

  const findAccurateLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude; // 위도
          const longitude = position.coords.longitude; // 경도
          getLocation({
            variables: {
              latLng: {
                lat: latitude,
                lng: longitude,
              },
            },
            onCompleted: (data) => {
              const { Key, LocalizedName } = data.getLocation;
              //키가 다를시 새로운 데이터를 가져온다.
              data.getLocation.Key !== Key &&
                refetchAllWeatherData(Key, LocalizedName);
            },
          });
        },
        (error) => {
          setGeolocationPositionError(error);
        }
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours === 0 && minutes === 3) {
        fivedaysFcstDataRefetch();
      }
      if (minutes === 3) {
        twelveHoursFcstRefetch();
        KhaiValuesRefetch();
      }
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const CIAaverage = calculateCIAverage(
    KhaiValuesData?.getCtprvnRltmMesureDnsty?.khaiValues
  );

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
    //locationDataError,
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
    <>
      {allQueriesCompleted ? (
        <Background
          currentConditionData={currentConditionData}
          fivedaysFcstData={fivedaysFcstData}
        >
          {/* 위치엑세스에러가 있을때만 보여주는 에러바 입니다. */}
          <ErrorBar
            error={geolocationPositionError}
            handlePermissionChange={handlePermissionChange}
          />
          <Header
            refetchAllWeatherData={refetchAllWeatherData}
            findAccurateLocation={findAccurateLocation}
          />

          <div className="flex justify-center items-center h-full mx-auto w-full pt-40 pb-10 sm:pt-0 sm:pb-0 sm:w-[980px] sm:h-screen">
            <div className="flex flex-col justify-center w-full h-full px-[14px] sm:px-[20px]">
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
          </div>
          <Footer />
        </Background>
      ) : null}
    </>
  );
};

export default Home;

interface LocationProps {
  Key: string;
  AdministrativeArea: string;
  LocalizedName: string;
}

export const getServerSideProps: GetServerSideProps<
  LocationProps
> = async ({}) => {
  const ipAddress = IP.address();

  const locationByipAdress = await axios
    .get(
      'http://dataservice.accuweather.com/locations/v1/cities/ipaddress/v1/cities/ipaddress',
      {
        params: { apikey: process.env.ACCUWEATHER_API_KEY, q: ipAddress },
      }
    )
    .then((res) => res.data);

  return {
    props: {
      Key: locationByipAdress.Key,
      AdministrativeArea: locationByipAdress.AdministrativeArea.LocalizedName,
      LocalizedName: locationByipAdress.LocalizedName,
    },
  };
};
