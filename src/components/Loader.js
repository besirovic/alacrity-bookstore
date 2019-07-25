import React from 'react';
import { Heading } from 'grommet';

/** Component to indicate loading state in app */
const Loader = () => (
  <Heading level={1} primary textAlign="center" margin={{ horizontal: 'auto', vertical: 'xlarge' }}>
    Loading
  </Heading>
);

export default Loader;
