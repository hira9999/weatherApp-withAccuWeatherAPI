import {
  ApolloClient,
  ApolloError,
  NormalizedCacheObject,
} from '@apollo/client';
import React from 'react';

interface WeatherApiErrorProps {
  weatherApiError?: ApolloError;
  client: ApolloClient<NormalizedCacheObject>;
}

const WeatherApiError = ({ weatherApiError, client }: WeatherApiErrorProps) => {
  const handleRefetchQueries = async () => {};
  return (
    <div
      className={`${
        weatherApiError ? 'top-0' : '-top-12'
      } fixed w-full bg-[#292A2D] text-center p-1 text-sm duration-700 transition-all cursor-pointer hover:underline`}
      onClick={() => {
        handleRefetchQueries();
      }}
    >
      데이터를 불러오는데 실패했습니다 ( 여길 클릭하여 재시도 )
    </div>
  );
};

export default WeatherApiError;
