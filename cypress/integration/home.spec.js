describe('Home page', () => {
  it('should display no selected books message', () => {
    cy.visit('/');
    cy.get('div span').contains("You don't have any books selected");
  });

  it('should display correct message for one selected book ', () => {
    cy.visit('/');

    cy.get('table tbody tr input[type="checkbox"]')
      .first()
      .click({ force: true });

    cy.get('div span').contains('You have selected 1 book');
  });

  it('should redirect you to "/book/:bookId" when click on "Edit" buton', () => {
    cy.visit('/');

    cy.get('table tbody tr button')
      .first()
      .click();

    cy.location('pathname').should('contain', '/book/');
  });
});
