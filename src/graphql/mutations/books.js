/** @file Mutations for Book type */

import { gql } from 'apollo-boost';

import { BOOK_FRAGMENT } from '../fragments/books';

/**
 * Mutation for (un)selecting book
 *
 * @param {number} bookId - unique book ID
 *
 * @returns {object}
 */
const TOGGLE_BOOK_SELECTION = gql`
  mutation ToggleBookSelection($bookId: Int!) {
    toggleBookSelection(bookId: $bookId) @client
  }
`;

/**
 * Mutation for creating new book
 *
 * @param {string} title - Title of the book
 * @param {string} author - Name of the author
 * @param {number} price - Price of the book
 *
 * @returns {object}
 */
const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      ...BookFragment
    }
  }

  ${BOOK_FRAGMENT}
`;

/**
 * Mutation for editing book
 *
 * @param {number} bookId - Unique ID of the book
 * @param {string} title - Title of the book
 * @param {string} author - Name of the author
 * @param {number} price - Price of the book
 *
 * @returns {object}
 */
const EDIT_BOOK = gql`
  mutation EditBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      ...BookFragment
    }
  }

  ${BOOK_FRAGMENT}
`;

export { TOGGLE_BOOK_SELECTION, CREATE_BOOK, EDIT_BOOK };
