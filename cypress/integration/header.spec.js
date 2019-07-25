describe('Header component', () => {
  it('should display "Add book" button on home page', () => {
    cy.visit('/');

    cy.get('header').contains('Add book');
  });

  it('should not display "Add book" button on book create pages', () => {
    cy.visit('/books/create');

    cy.get('header button').should('not.exist');
  });
});
