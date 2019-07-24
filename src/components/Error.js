import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const Error = ({ message }) => {
  return (
    <Box
      background="status-error"
      round="medium"
      width="xlarge"
      align="center"
      justify="between"
      margin={{ left: 'auto', right: 'auto', top: 'small', bottom: 'small' }}
      pad="xsmall">
      <Text>{message}</Text>
    </Box>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
