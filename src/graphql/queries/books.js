import { gql } from 'apollo-boost';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      bookId
      author
      title
      price
    }
  }
`;

const GET_BOOK = gql`
  query GetBook($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      author
      title
      price
    }
  }
`;

export { GET_BOOKS, GET_BOOK };
