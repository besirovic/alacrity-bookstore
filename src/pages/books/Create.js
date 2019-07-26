/** @file React component used as Crete book page */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { Mutation } from 'react-apollo';

import Header from '../../components/Header';
import BookForm from '../../components/BookForm';

import { GET_BOOKS } from '../../graphql/queries/books';
import { CREATE_BOOK } from '../../graphql/mutations/books';

/**
 * Method for updating already existing books data in cache after mutation execture
 */
const updateCache = (cache, { data: { createBook } }) => {
  /** @type {object[]} Read books data from cacahe */
  const { books } = cache.readQuery({ query: GET_BOOKS });

  /** Add new book to already existing data and save it to cache again */
  cache.writeQuery({
    query: GET_BOOKS,
    data: { books: books.concat([createBook]) },
  });
};

const CreateBook = ({ history }) => {
  return (
    <Mutation mutation={CREATE_BOOK} update={updateCache}>
      {(createBook, { loading, error }) => {
        /**
         * Method for handling form submittion
         *
         * @param {Object} variables - Object containing values user entered in form
         */
        const onSubmit = async variables => {
          /** Wait until mutation is done */
          await createBook({ variables });

          /** Navigate user to home page if mutation is done successfully */
          if (!loading && !error) history.push('/');
        };

        return (
          <React.Fragment>
            <Header />
            <Box width="xlarge" margin="auto">
              <Heading level={3} color="brand" textAlign="start">
                Create new book
              </Heading>
              <BookForm loading={loading} error={error} onSubmit={onSubmit} />
            </Box>
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

CreateBook.propTypes = {
  /** History object added automatticaly by react-router-dom  */
  history: PropTypes.object,
};

export default CreateBook;
