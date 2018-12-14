describe('App End-to-end Test', () => {
  it('test app', () => {
    cy.visit('/');

    cy.get('h4')
      .should('have.text', 'FIND YOUR MOVIE');

    cy.get('.input-field')
      .type('fifty')
      .should('have.value', 'fifty');
    cy.get('.input-field').type('{enter}');

    cy.wait(5000);

    cy.get('#moviesFound').should('contain', '3 movies found');
    cy.screenshot('fifty-search-results');
    cy.wait(1000);

    cy.get('#genre').click();
    cy.get('.input-field')
      .clear()
      .type('Adventure')
      .should('have.value', 'Adventure');
    cy.get('#search').click();

    cy.wait(4000);

    cy.get('#moviesFound').should('contain', '10 movies found');
    cy.screenshot('adventure-genre-results');
    cy.wait(1000);

    cy.get('#title').click();
    cy.get('.input-field')
      .clear()
      .type('asdrf!@')
      .should('have.value', 'asdrf!@');
    cy.get('.input-field').type('{enter}');
    cy.get('#search').click();

    cy.wait(4000);

    cy.get('.not-found-message')
      .should('have.text', 'No Films found');
    cy.screenshot('no-found-results');
    cy.wait(1000);

    cy.url().should('eq', 'http://localhost/');
  });
});
