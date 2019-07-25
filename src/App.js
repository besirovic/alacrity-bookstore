import React from 'react';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import bookResolvers from './graphql/resolvers/books';

import HomePage from './pages/Home';
import CreateBookPage from './pages/books/Create';
import EditBookPage from './pages/books/Edit';

import config from './config';
import theme from './style/theme';

/**
 * Exporting apollo server uri from config
 *
 * @type {stirng}
 */
const { uri } = config.apollo;

/**
 * Create new instance of apollo inmemory cache
 *
 * @type {InMemoryCache}
 */
const cache = new InMemoryCache();

/**
 * Create new instance of apollo client
 *
 * @type {ApolloClient}
 */
const client = new ApolloClient({
  uri,
  cache,
  resolvers: {
    ...bookResolvers,
  },
});

/**
 * Write initial data to cache storage
 */
cache.writeData({
  data: {
    selectedBooks: [],
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={theme}>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/books/create" component={CreateBookPage} />
          <Route path="/book/:bookId" component={EditBookPage} />
        </Router>
      </Grommet>
    </ApolloProvider>
  );
}

export default App;
