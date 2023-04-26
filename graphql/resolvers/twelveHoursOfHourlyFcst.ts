import axiosInstance from '../api/axiosInstence';
import qs from 'querystring';
import { hours } from '../../fakeApi/current';

interface LocationKey {
  locationKey: string;
}

const TWELVEHOURSFCST_ENDPOINT = '/forecasts/v1/hourly/12hour/';

const queryConv = (locationKey: string | number) => {
  const TWELVEHOURSFCST_QUERY_PARAMS = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    language: 'ko',
    details: true,
    metric: true,
  };

  return (
    TWELVEHOURSFCST_ENDPOINT +
    locationKey +
    '?' +
    qs.stringify(TWELVEHOURSFCST_QUERY_PARAMS)
  );
};

export const twelveHoursOfHourlyFcst = {
  Query: {
    getTwelveHoursFcst: async (_: any, { locationKey }: LocationKey) => {
      try {
        // const { data } = await axiosInstance.get(queryConv(locationKey));
        return { HoursFcsts: hours };
      } catch (e) {}
    },
  },
};
