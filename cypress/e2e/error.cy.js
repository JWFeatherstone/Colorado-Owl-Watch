describe('Testing for error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 500,
    })
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
  })

  it('when the user visits the Home page and the fetch request fails, they should be redirected to an error page telling them as much', () => {
    cy.url().should('include', '/error')
      .get('.error-header').should('have.text', 'The owls have flown off somewhere.')
      .get('.error-sub').should('have.text', '(there was an unexpected server error, please try that again.)')
  })

  it('the user should be able to click on the logo in the header to be taken back to the home page', () => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })
    cy.get('.site-logo').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})