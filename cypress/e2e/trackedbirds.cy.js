describe('Testing for the Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })
    cy.visit('http://localhost:3000/explore')
    cy.wait(1000)
  })

  it('when the user favorites a bird, they should be able to go to the tracked birds page and see each bird they have favorited', () => {
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').first().click()
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').last().click()
    cy.get('.menu-icon').click()
    cy.get('[href="/tracked"]').click()
    cy.get('.bird-card').should('have.length', 2)
    cy.get('.bird-card > .card-banner > .card-name').first().should('have.text', 'Barred Owl')
    cy.get('.bird-card > .card-banner > .card-name').last().should('have.text', 'Western Screech-Owl')
  })

  it('when the user unfavorites a bird, it should disappear from the tracked birds page.', () => {
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').first().click()
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').last().click()
    cy.get('.menu-icon').click()
    cy.get('[href="/tracked"]').click()
    cy.get('.bird-card').should('have.length', 2)
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').first().click()
    cy.get('.bird-card').should('have.length', 1)
    cy.get('.bird-card > .card-banner > .card-name').should('have.text', 'Western Screech-Owl')
  })

  it('the users tracked birds should show on the home page map with a different icon', () => {
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').eq(3).click();
    cy.get('.site-logo').click();
    cy.get('.leaflet-marker-icon').last()
      .should('have.attr', 'src')
      .and('include', 'favorite-icon');
  })
})