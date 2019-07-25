describe('Create book page', () => {
  it('should create new book', () => {
    cy.visit('/books/create');

    cy.get('input[name="title"]').type('How we became great company');
    cy.get('input[name="author"]').type('Alacrity Law');
    cy.get('input[name="price"]').type(100);

    cy.get('button[type="submit"]').click();

    cy.get('table tbody tr')
      .last()
      .contains('How we became great company');
  });
});
