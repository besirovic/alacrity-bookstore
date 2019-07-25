import React from 'react';
import { Query } from 'react-apollo';

import Header from '../components/Header';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BooksTable from '../components/BooksTable';
import SelectedBooksSummary from '../components/SelectedBooksSummary';

import { GET_BOOKS } from '../graphql/queries/books';

const Home = () => (
  <Query query={GET_BOOKS}>
    {({ loading, error, data = {} }) => {
      /** Looping through books results and add 'isSelected' field if book is selected */
      const books = data.books
        ? data.books.map(({ bookId, ...book }) => ({
            bookId,
            ...book,
            isSelected: data.selectedBooks.includes(bookId),
          }))
        : [];

      /** Calculate price of all selected books */
      const price = books.reduce((a, b) => a + (b.isSelected ? b.price : 0), 0);

      /** Method for easier rendering Loader component */
      const renderLoader = () => <Loader />;

      /** Method for rendering content */
      const renderContent = () => {
        /** Render message if error exits */
        if (error) return <Error message="Something went wrong, please try again" />;

        return (
          <React.Fragment>
            <SelectedBooksSummary count={data.selectedBooks.length} price={price} />
            <BooksTable books={books} />
          </React.Fragment>
        );
      };

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
