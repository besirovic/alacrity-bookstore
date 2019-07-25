import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { Query, Mutation } from 'react-apollo';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import BookForm from '../../components/BookForm';

import { GET_BOOKS, GET_BOOK } from '../../graphql/queries/books';
import { EDIT_BOOK } from '../../graphql/mutations/books';

const EditBook = ({ match, history }) => {
  const bookId = match.params.bookId;

  return (
    <Query query={GET_BOOK} variables={{ bookId }} fetchPolicy="network-only">
      {({ loading, error, data }) => {
        // Method for easier rendering Loader component
        const renderLoader = () => <Loader />;

        // Method for easier rendering Error component
        const renderError = () => <Error message="Something went wrong. Please try again" />;

        // Method for rendering content
        const renderContent = () => {
          // Render error message if error exits or there is no books data
          if (error || !data.book) return renderError();

          return (
            <Mutation mutation={EDIT_BOOK} refetchQueries={() => [{ query: GET_BOOKS }]}>
              {(editBook, { loading, error }) => {
                /**
                 * Method for handling form submitting
                 *
                 * @param {Object} variables - Object containing values user entered in form
                 */
                const onSubmit = async variables => {
                  await editBook({ variables });
                  if (!loading && !error) history.push('/');
                };

                return (
                  <Box width="xlarge" margin="auto">
                    <Heading level={3} color="brand" textAlign="start">
                      Edit book
                    </Heading>
                    <BookForm book={data.book} error={error} loading={loading} onSubmit={onSubmit} />
                  </Box>
                );
              }}
            </Mutation>
          );
        };

        return (
          <React.Fragment>
            <Header />
            {loading ? renderLoader() : renderContent()}
          </React.Fragment>
        );
      }}
    </Query>
  );
};

EditBook.propTypes = {
  /** Object containing data about current route passed autommatically by react-router-dom */
  match: PropTypes.object,

  /** History object passed autommatically by react-rotuer-dom  */
  history: PropTypes.object,
};

export default EditBook;
