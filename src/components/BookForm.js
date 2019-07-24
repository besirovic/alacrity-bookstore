import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box, Button, TextInput } from 'grommet';
import { Link } from 'react-router-dom';

import Error from '../components/Error';

const BookForm = ({ book, error, loading, onSubmit }) => {
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
        onSubmit(values);
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

            {Object.entries(errors).length > 0 && (
              <Error message="You must fill all inputs with correct data. Please try again" />
            )}

            {error && <Error message="Something went wrong, please try again" />}

            <Box alignSelf="end" justify="end" direction="row" margin={{ top: 'medium' }}>
              <Link to="/">
                <Button primary color="light-6" label="Cancel" margin={{ right: 'medium' }} />
              </Link>
              <Button primary type="submit" color="accent-1" label={loading ? 'Please wait ...' : 'Submit'} />
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

BookForm.propTypes = {
  book: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
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
