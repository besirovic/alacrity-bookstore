/** @file React component to indicate loading state in app */

import React from 'react';
import { Heading } from 'grommet';

const Loader = () => (
  <Heading level={1} primary textAlign="center" margin={{ horizontal: 'auto', vertical: 'xlarge' }}>
    Loading
  </Heading>
);

export default Loader;
