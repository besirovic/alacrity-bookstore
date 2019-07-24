import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { Mutation } from 'react-apollo';

import Header from '../../components/Header';
import BookForm from '../../components/BookForm';

import { GET_BOOKS } from '../../graphql/queries/books';
import { CREATE_BOOK } from '../../graphql/mutations/books';

const updateCache = (cache, { data: { createBook } }) => {
  const { books } = cache.readQuery({ query: GET_BOOKS });
  cache.writeQuery({
    query: GET_BOOKS,
    data: { books: books.concat([createBook]) },
  });
};

const CreateBook = ({ history }) => {
  return (
    <Mutation mutation={CREATE_BOOK} update={updateCache}>
      {(createBook, { loading, error }) => {
        const onSubmit = async variables => {
          await createBook({ variables });
          if (!loading && !error) history.push('/');
        };

        return (
          <React.Fragment>
            <Header />
            <Box width="xlarge" margin="auto">
              <Heading level={3} color="brand" textAlign="start">
                Create new book
              </Heading>
              <BookForm error={error} loading={loading} onSubmit={onSubmit} />
            </Box>
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

CreateBook.propTypes = {
  history: PropTypes.object,
};

export default CreateBook;
