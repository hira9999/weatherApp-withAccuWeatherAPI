import axiosInstance from '../api/axiosInstence';
import qs from 'querystring';
import { fakeCurrent } from '../../fakeApi/current';
import dfs_xy_conv from '../utils/dfs_xy_conv';

interface LocationKey {
  locationKey: string;
}

const CURRENT_CONDITIONS_ENDPOINT = '/currentconditions/v1/';

const queryConv = (locationKey: string | number) => {
  const CURRENTCONDITIONS_QUERY_PARAMS = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    language: 'ko',
    details: true,
  };

  return (
    CURRENT_CONDITIONS_ENDPOINT +
    locationKey +
    '?' +
    qs.stringify(CURRENTCONDITIONS_QUERY_PARAMS)
  );
};

export const currentConditionsResolvers = {
  Query: {
    getCurrentCondition: async (_: any, { locationKey }: LocationKey) => {
      try {
        // const { data } = await axiosInstance.get(queryConv(locationKey));

        return { ...fakeCurrent };
      } catch (e) {
        console.log(e);
      }
    },
  },
};
