import React from 'react';
import { Heading } from 'grommet';

import Header from '../../components/Header';

const EditBook = () => (
  <React.Fragment>
    <Header />
    <Heading level={1} color="brand" textAlign="center" margin="auto">
      Edit book page
    </Heading>
  </React.Fragment>
);

export default EditBook;
