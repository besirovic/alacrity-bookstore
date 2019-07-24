import { gql } from 'apollo-boost';

const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;

const EDIT_BOOK = gql`
  mutation EditBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;

export { CREATE_BOOK, EDIT_BOOK };
