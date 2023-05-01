import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apolloClient';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import APIErrorBoundary from '../components/Common/ApiErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIErrorBoundary client={client}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </APIErrorBoundary>
  );
}

export default MyApp;
