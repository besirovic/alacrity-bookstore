describe('Edit book page', () => {
  it('should update book', () => {
    cy.visit('/');

    cy.get('table tbody tr button')
      .first()
      .click();

    cy.get('input[name="title"]')
      .clear()
      .type('Some awesome book');

    cy.get('button[type=submit]').click();

    cy.get('table tbody tr')
      .first()
      .contains('Some awesome book');
  });
});
