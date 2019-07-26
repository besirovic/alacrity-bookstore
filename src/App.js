/** @file React app starting point */

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

/** @type {stirng} URI of Apollo Server */
const { uri } = config.apollo;

/** @type {InMemoryCache} New instance of apollo inmemory cache */
const cache = new InMemoryCache();

/** @type {ApolloClient} New instance of apollo client */
const client = new ApolloClient({
  uri,
  cache,
  resolvers: {
    ...bookResolvers,
  },
});

/** Write initial data to cache storage */
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
