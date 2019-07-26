/** @file React component for displayling single row in books table */

import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { TableRow, TableCell, CheckBox, Button } from 'grommet';
import { Edit } from 'grommet-icons';

import { TOGGLE_BOOK_SELECTION } from '../graphql/mutations/books';

const BooksTableRow = ({ title, author, price, bookId, isSelected }) => {
  return (
    <TableRow>
      <TableCell>
        <Mutation mutation={TOGGLE_BOOK_SELECTION}>
          {toggleBookSelection => (
            <CheckBox checked={isSelected} onChange={() => toggleBookSelection({ variables: { bookId } })} />
          )}
        </Mutation>
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <Link to={`/book/${bookId}`}>
          <Button icon={<Edit />} label="Edit" />
        </Link>
      </TableCell>
    </TableRow>
  );
};

BooksTableRow.propTypes = {
  /** Title of the book */
  title: PropTypes.string.isRequired,

  /** Author of the book */
  author: PropTypes.string.isRequired,

  /** Price of the book */
  price: PropTypes.number.isRequired,

  /** Unique book ID */
  bookId: PropTypes.number.isRequired,

  /** Marking book as selected or not */
  isSelected: PropTypes.bool.isRequired,
};

export default BooksTableRow;
