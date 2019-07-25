import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Button, RoutedAnchor } from 'grommet';
import { Add } from 'grommet-icons';

/** App header */
const Header = ({ showAddNew, ...props }) => (
  <Box
    tag="header"
    width="xlarge"
    direction="row"
    align="center"
    justify="between"
    margin={{ left: 'auto', right: 'auto', bottom: 'medium' }}
    pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
    border={{ style: 'solid', size: 'small', color: 'brand', side: 'bottom' }}
    style={{ zIndex: '1' }}
    {...props}>
    <RoutedAnchor path="/" label="Alacrity Law" size="large" margin={{ top: '8px' }} primray />
    {showAddNew && (
      <Link to="/books/create">
        <Button icon={<Add />} label="Add book" primary color="accent-1" />
      </Link>
    )}
  </Box>
);

Header.propTypes = {
  /** Controll visibility of "Add book" button */
  showAddNew: PropTypes.bool,
};

Header.defaultProps = {
  showAddNew: false,
};

export default Header;
