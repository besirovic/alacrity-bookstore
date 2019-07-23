import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import config from './config';

const { uri } = config.apollo;
const client = new ApolloClient({
  uri,
});

function App() {
  return <ApolloProvider client={client} />;
}

export default App;
