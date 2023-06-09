describe('Testing for the owl tips page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/owling-tips')
    cy.wait(1000)
  })

  it('when the user visits the owling tips page they should see a title and four tips', () => {
    cy.get('.owling-info-header-wrap').children().should('have.length', 5);
    cy.get('.high-level-header').should('have.text', 'Owling Tips')
    cy.get('.tip-sub').should('have.length', 4)
    cy.get('.tip-sub').first().should('have.text', 'Keep your distance! As with most birds, keeping a distance that doesn’t stress the bird also keeps the bird in view for longer looks. Every bird has their own sense of how close they can tolerate people before they are disturbed. But, if the owl sees you and starts to change position or fly off, you are too close.  ')
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
