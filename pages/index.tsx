import type { GetServerSideProps, NextPage } from 'next';
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
import { useCallback, useEffect, useState } from 'react';
import {
  GEOPOSITION_SEARCH_QUERY,
  CURRENTCONDITIONS_QUERY,
  FIVEDAYS_FCST_QUERY,
  TWELVEHOURS_FCST_QUERY,
  AIR_QUALITY_KHAIVALUES_QUERY,
} from '../graphql/client/queryClient';

import Title from '../components/Common/Title';
import WeatherGrid from '../components/Grid/WeatherGrid';
import calculateCIAverage from '../utils/calculateCIAverage';
import ErrorBar from '../components/Common/ErrorBar';
import { MoonLoader } from 'react-spinners';
import Header from '../components/Common/Header';
import Background from '../components/Common/Background';
import Footer from '../components/Common/Footer';
import getCityByLonLat from '../utils/minMatLonLatByCity';
import cookie from 'cookie';
import Cookies from 'js-cookie';

interface HomeServerSideProps {
  Key: string;
  cityName: string;
}

const COOKIE_OPTION = {
  httpOnly: false,
  maxAge: 1000 * 60 * 60 * 24 * 30, //30일
};

const Home: NextPage<HomeServerSideProps> = ({ Key, cityName }) => {
  const [geolocationPositionError, setGeolocationPositionError] = useState<
    GeolocationPositionError | undefined
  >(undefined);
  const [navigatorPermission, setNavigatorPermission] =
    useState<boolean>(false);

  const [getLocation, {}] = useLazyQuery<Location, LatLng>(
    GEOPOSITION_SEARCH_QUERY
  );

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
    {
      variables: {
        locationKey: Key,
        sidoName: cityName,
      },
    }
  );

  const refetchAllWeatherData = useCallback(
    async (locationKey?: string, latitude?: string, longitude?: string) => {
      if (locationKey && latitude && longitude) {
        const sidoName = getCityByLonLat(latitude, longitude);
        currentConditionRefetch({ locationKey });
        fivedaysFcstDataRefetch({ locationKey });
        twelveHoursFcstRefetch({ locationKey });
        KhaiValuesRefetch({
          locationKey,
          sidoName,
        });
      } else {
        currentConditionRefetch();
        fivedaysFcstDataRefetch();
        twelveHoursFcstRefetch();
        KhaiValuesRefetch();
      }
    },
    []
  );

  const findAccurateLocation = useCallback(async () => {
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
              const {
                Key: currentKey,
                GeoPosition: { Latitude: latitude, Longitude: longitude },
                LocalizedName,
              } = data.getLocation;
              //키가 다를시 새로운 데이터를 가져온다.
              if (Key !== currentKey) {
                refetchAllWeatherData(currentKey, latitude, longitude);

                const currentLocation = {
                  locationKey: currentKey,
                  localizedName: LocalizedName,
                };

                Cookies.set(
                  'locationKey',
                  JSON.stringify(currentLocation),
                  COOKIE_OPTION
                );
              }
            },
          });
        },
        (error) => {
          setGeolocationPositionError(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours === 0 && minutes === 3) {
        fivedaysFcstDataRefetch();
      }
      if (minutes === 3) {
        currentConditionRefetch();
        fivedaysFcstDataRefetch();
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
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <MoonLoader />
        </div>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<
  HomeServerSideProps
> = async (context) => {
  const cookies = cookie.parse(context.req.headers.cookie || '');

  if (cookies.locationKey && cookies.location) {
    const { locationKey, localizedName } = JSON.parse(cookies.locationKey);
    const { latitude, longitude } = JSON.parse(cookies.location);
    const cityName = getCityByLonLat(latitude as string, longitude as string);
    return {
      props: {
        Key: locationKey,
        cityName,
        LocalizedName: localizedName,
      },
    };
  }
  if (cookies.location) {
    const { latitude, longitude } = JSON.parse(cookies.location);
    const cityName = getCityByLonLat(latitude as string, longitude as string);
    const locationByipAdress = await axios
      .get(
        'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
        {
          params: {
            apikey: process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY,
            q: latitude + ',' + longitude,
            language: 'ko',
          },
        }
      )
      .then((res) => res.data);

    const cookieValue = {
      locationKey: locationByipAdress.Key,
      localizedName: locationByipAdress.LocalizedName,
    };
    const cookieOption = cookie.serialize(
      'locationKey',
      JSON.stringify(cookieValue),
      COOKIE_OPTION
    );

    context.res.setHeader('Set-Cookie', cookieOption);

    return {
      props: {
        Key: locationByipAdress.Key,
        cityName,
        LocalizedName: locationByipAdress.LocalizedName,
      },
    };
  }

  return {
    props: {
      Key: '223347',
      cityName: '서울',
      LocalizedName: 'Seoul',
    },
  };
};
