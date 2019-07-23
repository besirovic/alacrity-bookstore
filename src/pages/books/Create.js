import React from 'react';
import { Heading } from 'grommet';

import Header from '../../components/Header';

const CreateBook = () => (
  <React.Fragment>
    <Header />
    <Heading level={1} color="brand" textAlign="center" margin="auto">
      Create book page
    </Heading>
  </React.Fragment>
);

export default CreateBook;
