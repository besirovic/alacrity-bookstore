/** @file React component containing reusable form which can be used for creating new or editing existing book */

import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box, Button, TextInput } from 'grommet';
import { Link } from 'react-router-dom';

import Error from '../components/Error';

const BookForm = ({ book, error, loading, onSubmit }) => {
  /** @type {string} Error message do display when network or some other error occur */
  const errorMessage = 'Something went wrong, please try again';

  /** @type {string} Error message to display when validation error occur */
  const validationErrorMessage = 'You must fill all inputs with correct data. Please try again';

  /** @type {object} Yup validation schema for valiating form */
  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    price: yup.number().required(),
  });

  return (
    <Formik
      initialValues={book}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        /** Submit form */
        onSubmit(values);

        /** Set submitting state to false */
        setSubmitting(false);
      }}>
      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
        <Box margin="auto" width="xlarge">
          <Form onSubmit={handleSubmit}>
            <Box margin={{ bottom: 'medium' }}>
              <TextInput
                name="title"
                placeholder="Title"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box margin={{ bottom: 'medium' }}>
              <TextInput
                name="author"
                placeholder="Author"
                type="text"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box margin={{ bottom: 'medium' }}>
              <TextInput
                name="price"
                placeholder="Price"
                type="number"
                step="0.01"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            {(Object.entries(errors).length > 0 || error) && (
              <Error message={error ? errorMessage : validationErrorMessage} />
            )}

            <Box alignSelf="end" justify="end" direction="row" margin={{ top: 'medium' }}>
              <Link to="/">
                <Button primary color="light-6" label="Cancel" margin={{ right: 'medium' }} />
              </Link>
              <Button
                primary
                type="submit"
                color="accent-1"
                label={loading ? 'Please wait ...' : 'Submit'}
                disabled={loading}
              />
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

BookForm.propTypes = {
  /** Object containing book attributes which will be used as default values in form if provided */
  book: PropTypes.object,

  /** Error which might occur during running mutation. Used to display error at same position in form */
  error: PropTypes.any,

  /** Indicate loading state when data are sending by mutation */
  loading: PropTypes.bool,

  /** Function will be executed as callback when form is submittted */
  onSubmit: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  book: {
    title: '',
    author: '',
    price: '',
  },
  error: null,
  loading: false,
};

export default BookForm;
