import React from 'react';
import { Heading } from 'grommet';

import Header from '../components/Header';

const Home = () => (
  <React.Fragment>
    <Header showAddNew />
    <Heading level={1} color="brand" textAlign="center" margin="auto">
      Home
    </Heading>
  </React.Fragment>
);

export default Home;
