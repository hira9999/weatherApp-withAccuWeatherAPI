import axiosInstance from '../api/axiosInstence';
import qs from 'querystring';
import { days } from '../../fakeApi/current';

interface LocationKey {
  locationKey: string;
}

const FIVEDAYS_FCST_ENDPOINT = '/forecasts/v1/daily/5day/';

const queryConv = (locationKey: string | number) => {
  const FIVEDAYS_FCST_QUERY_PARAMS = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    language: 'ko',
    details: true,
    metric: true,
  };

  return (
    FIVEDAYS_FCST_ENDPOINT +
    locationKey +
    '?' +
    qs.stringify(FIVEDAYS_FCST_QUERY_PARAMS)
  );
};

export const fiveDaysOfDailyFcst = {
  Query: {
    getFiveDaysFcst: async (_: any, { locationKey }: LocationKey) => {
      try {
        //const { data } = await axiosInstance.get(queryConv(locationKey));
        return { ...days };
      } catch (e) {}
    },
  },
};
