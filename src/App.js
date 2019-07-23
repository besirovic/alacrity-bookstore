import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Grommet, Heading } from 'grommet';

import config from './config';
import theme from './style/theme';

const { uri } = config.apollo;
const client = new ApolloClient({
  uri,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={theme}>
        <Heading level={1} color="brand" textAlign="center" margin="auto">
          Hello Alacrity
        </Heading>
      </Grommet>
    </ApolloProvider>
  );
}

export default App;
