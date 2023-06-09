describe('Testing for the navigation elements', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })
    
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
  })

  it('the user should be able to use the drop-down menu to navigate to the explore, tracked birds, owl tips, about, and home pages', () => {
    cy.get('.menu-icon').click()
      .get('.menu').should('have.class', 'menu-open')
      .get('.menu').get('.menu-link').first().click()
    cy.url().should('include', '/explore')
      .get('.menu-icon').click()
      .get('.menu').get('.menu-link').eq(1).click()
    cy.url().should('include', '/tracked')
      .get('.menu-icon').click()
      .get('.menu').get('.menu-link').eq(2).click()
    cy.url().should('include', '/owling-tips')
      .get('.menu-icon').click()
      .get('.menu').get('.menu-link').eq(3).click()
    cy.url().should('include', '/about')
  })
})