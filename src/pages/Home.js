import React from 'react';
import { Query } from 'react-apollo';

import Header from '../components/Header';
import Loader from '../components/Loader';
import BooksTable from '../components/BooksTable';
import SelectedBooksSummary from '../components/SelectedBooksSummary';

import { GET_BOOKS } from '../graphql/queries/books';

const Home = () => (
  <Query query={GET_BOOKS}>
    {({ loading, data }) => {
      const renderLoader = () => <Loader />;
      const renderContent = () => (
        <React.Fragment>
          <SelectedBooksSummary />
          <BooksTable books={data.books} />
        </React.Fragment>
      );
      return (
        <React.Fragment>
          <Header showAddNew />
          {loading ? renderLoader() : renderContent()}
        </React.Fragment>
      );
    }}
  </Query>
);

export default Home;
