import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

/** Display number of selected books and their total price */
const SelectedBooksSummary = ({ count, price }) => (
  <Box
    background="accent-1"
    round="medium"
    width="xlarge"
    align="center"
    justify="between"
    margin={{ left: 'auto', right: 'auto', top: 'large', bottom: 'large' }}
    pad="small">
    {count === 0 && <Text>You don't have any books selected</Text>}

    {count > 0 && (
      <Text>
        You have selected{' '}
        <strong>
          {count} book{count > 1 && 's'}
        </strong>{' '}
        and total price is
        <strong> $</strong>
        <strong>{parseFloat(price).toFixed(2)}</strong>
      </Text>
    )}
  </Box>
);

SelectedBooksSummary.propTypes = {
  /** Number of selected books */
  count: PropTypes.number.isRequired,

  /** Total price of selected books */
  price: PropTypes.number.isRequired,
};

export default SelectedBooksSummary;
