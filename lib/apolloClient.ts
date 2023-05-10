import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://weather-app-with-accu-weather-naummihlv-hira9999.vercel.app/api/graphql',
  cache: new InMemoryCache({}),
  connectToDevTools: true,
});
