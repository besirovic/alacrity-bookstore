/** @file Fragments defined on Book type */

import { gql } from 'apollo-boost';

/**
 * Fragment returning all book data
 *
 * @returns {object}
 */
const BOOK_FRAGMENT = gql`
  fragment BookFragment on Book {
    bookId
    title
    author
    price
  }
`;

export { BOOK_FRAGMENT };
