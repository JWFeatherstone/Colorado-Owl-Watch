describe('Testing for the Explore page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })

    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent/brdowl?lat=39.7392&lng=-104.9903', {
      statusCode: 200,
      fixture: 'burOwlObs.json'
    })

    cy.visit('http://localhost:3000/explore')
    cy.wait(1000)
  })

  it('when the user visits the Explore page, they should see a grid of cards representing all of the observed owl species in Colorado', () => {
    cy.get('.bird-card').should('have.length', 13)
    cy.get('.bird-card > .card-banner > .card-name').first().should('have.text', 'Barred Owl')
    cy.get('.bird-card > .card-banner > .card-name').last().should('have.text', 'Western Screech-Owl')
  })

  it('the user should be able to favorite a bird by clicking on the heart icon and see it update', () => {
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').should('have.attr', 'alt', 'favorite this owl')
    cy.get('.bird-card > .card-banner > .card-links > .card-favorite').first().click()
      .get('.bird-card > .card-banner > .card-links > .card-favorite').should('have.attr', 'alt', 'unfavorite this owl')
      .get('.bird-card > .card-banner > .card-links > .card-favorite').should('have.attr', 'src').and('include', 'favorite-icon')
  })

  it('the user should be able to click on the info link for a bird card and be taken to the individual bird details page', () => {
    cy.get('.bird-card > .card-banner > .card-links > .details-link').first().click()
    cy.url().should('include', '/explore/brdowl')
  })

  it('the user should be able to click on the logo in the header to be taken back to the home page', () => {
    cy.get('.site-logo').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})