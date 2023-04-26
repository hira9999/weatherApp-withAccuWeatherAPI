import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from '../../graphql/resolvers/index';
import { typeDefs } from '../../graphql/typeDefs';
import WeatherAPI from '../../graphql/api/weatherAPI';
import AirQualityAPI from '../../graphql/api/airQualityAPI';

export interface ContextValue {
  dataSources: {
    weatherAPI: WeatherAPI;
    airQualityAPI: AirQualityAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        weatherAPI: new WeatherAPI({ cache }),
        airQualityAPI: new AirQualityAPI({ cache }),
      },
    };
  },
});
