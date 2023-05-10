import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://eyeofthetyphoon.vercel.app/api/graphql',
  cache: new InMemoryCache({}),
  connectToDevTools: true,
});
