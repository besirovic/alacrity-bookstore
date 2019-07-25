import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';

import BooksTableRow from './BooksTableRow';

/** Component for displaying books in form of table */
const BooksTable = ({ books }) => (
  <Table margin={{ left: 'auto', right: 'auto', bottom: 'large' }}>
    <TableHeader>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {books.map(book => (
        <BooksTableRow key={book.bookId} {...book} />
      ))}
    </TableBody>
  </Table>
);

BooksTable.propTypes = {
  /** Array of books */
  books: PropTypes.array.isRequired,
};

BooksTable.defaultProps = {
  books: [],
};

export default BooksTable;
