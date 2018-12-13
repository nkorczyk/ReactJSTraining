describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('/');

    cy.get('h4')
      .should('have.text', 'FIND YOUR MOVIE');
  });
});
