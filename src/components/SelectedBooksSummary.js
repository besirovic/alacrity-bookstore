import React from 'react';
import { Box, Text } from 'grommet';

const SelectedBooksSummary = () => {
  return (
    <Box
      background="accent-1"
      round="medium"
      width="xlarge"
      align="center"
      justify="between"
      margin={{ left: 'auto', right: 'auto', top: 'large', bottom: 'large' }}
      pad="small">
      <Text>
        You have selected <strong>5 books</strong> and total price is <strong>$40</strong>
      </Text>
    </Box>
  );
};

export default SelectedBooksSummary;
