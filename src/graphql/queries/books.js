/** @file Queries for Book type */

import { gql } from 'apollo-boost';

import { BOOK_FRAGMENT } from '../fragments/books';

/**
 * Query for fetching books from server and selected books from local store
 *
 * @returns {object}
 */
const GET_BOOKS = gql`
  query GetBooks {
    books {
      ...BookFragment
    }
    selectedBooks @client
  }

  ${BOOK_FRAGMENT}
`;

/**
 * Query for fetching single book
 *
 * @param {number} bookId - Unique id of the book
 *
 * @returns {object}
 */
const GET_BOOK = gql`
  query GetBook($bookId: Int!) {
    book(bookId: $bookId) {
      ...BookFragment
    }
  }

  ${BOOK_FRAGMENT}
`;

export { GET_BOOKS, GET_BOOK };
