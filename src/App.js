import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import CreateBookPage from './pages/books/Create';
import EditBookPage from './pages/books/Edit';

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
