import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, CheckBox, Button } from 'grommet';
import { Link } from 'react-router-dom';
import { Edit } from 'grommet-icons';

const BooksTableRow = ({ title, author, price, bookId, onSelect }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onSelect(bookId, checked);
  }, [checked]);

  return (
    <TableRow>
      <TableCell>
        <CheckBox checked={checked} onChange={e => setChecked(e.target.checked)} />
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BooksTableRow;
