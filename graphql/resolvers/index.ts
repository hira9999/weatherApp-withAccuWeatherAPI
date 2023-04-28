import type { ContextValue } from '../../pages/api/graphql';

interface LatLng {
  latLng: {
    lat: number;
    lng: number;
  };
}

interface LocationKey {
  locationKey: string;
}

interface AirQuailtyInput {
  sidoName: string;
  locationKey: string;
}

export const resolvers = {
  Query: {
    getLocation: async (
      _: any,
      { latLng: { lat, lng } }: LatLng,
      { dataSources }: ContextValue
    ) => {
      return dataSources.weatherAPI.getLocation(lat, lng);
    },

    getCurrentCondition: async (
      _: any,
      { locationKey }: LocationKey,
      { dataSources }: ContextValue
    ) => {
      return dataSources.weatherAPI.getCurrentCondition(locationKey);
    },

    getTwelveHoursFcst: async (
      _: any,
      { locationKey }: LocationKey,
      { dataSources }: ContextValue
    ) => {
      return dataSources.weatherAPI.getTwelveHoursFcst(locationKey);
    },

    getFiveDaysFcst: async (
      _: any,
      { locationKey }: LocationKey,
      { dataSources }: ContextValue
    ) => {
      return dataSources.weatherAPI.getFiveDaysFcst(locationKey);
    },

    getCtprvnRltmMesureDnsty: async (
      _: any,
      { sidoName, locationKey }: AirQuailtyInput,
      { dataSources }: ContextValue
    ) => {
      return dataSources.airQualityAPI.getCtprvnRltmMesureDnsty(
        sidoName,
        locationKey
      );
    },
  },
};
