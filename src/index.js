import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import App from './App';
import { setContext } from '@apollo/client/link/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "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";
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

