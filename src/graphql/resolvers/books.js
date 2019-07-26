/** @file Local resolvers for Book type */

import { gql } from 'apollo-boost';

/**
 * Local resolver for updating state of selected books
 *
 * @return {number}
 */
const toggleBookSelection = (_root, { bookId }, { cache }) => {
  /** @type {object} Query for reading selected books from cache */
  const query = gql`
    query GetSelectedBooks {
      selectedBooks @client
    }
  `;

  /** @type {object} Data fetched from cache for specifed query */
  const data = cache.readQuery({ query });

  /** @type {object} Array of selected books */
  const { selectedBooks } = data;

  /**
   * If selecetedBooks include "bookId", then remove (unselect) it from books array.
   * Othervise add book to books array
   * */
  if (selectedBooks.includes(bookId)) selectedBooks.splice(selectedBooks.indexOf(bookId), 1);
  else selectedBooks.push(bookId);

  /** Write modified data to cache */
  cache.writeQuery({ query, data: { selectedBooks } });

  return bookId;
};

export default {
  Mutation: {
    toggleBookSelection,
  },
};
