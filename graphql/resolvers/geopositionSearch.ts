import qs from 'querystring';
import { location } from '../../fakeApi/current';

interface LatLng {
  latLng: {
    lat: number;
    lng: number;
  };
}

const GEOPOSITIONSEARCH_ENDPOINT = '/locations/v1/cities/geoposition/search';

const queryConv = (lat: number, lng: number) => {
  const GEOPOSITIONSEARCH_QUERY_PARAMS = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    q: lat + ',' + lng,
    language: 'ko',
    details: true,
    toplevel: true,
  };

  return (
    GEOPOSITIONSEARCH_ENDPOINT +
    '?' +
    qs.stringify(GEOPOSITIONSEARCH_QUERY_PARAMS)
  );
};

export const geopositionResolver = {
  Query: {
    getLocation: async (_: any, { latLng: { lat, lng } }: LatLng) => {
      try {
        // const { data } = await axiosInstence.get(queryConv(lat, lng));
        return { ...location };
      } catch (e) {}
    },
  },
};
