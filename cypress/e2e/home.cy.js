describe('Testing for the Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent', {
      statusCode: 200,
      fixture: 'owlObs.json'
    })

    cy.intercept('GET', 'https://api.ebird.org/v2/data/obs/US-CO/recent/brnowl?lat=39.7392&lng=-104.9903', {
      statusCode: 200,
      fixture: 'burOwlObs.json'
    })
    
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
  })

  it('should display the header with the site title, logo, and menu', () => {
    cy.get('header').should('be.visible')
      .get('nav').should('be.visible')
    cy.get('.nav-right')
      .get('h1').should('have.text', 'COLORADO OWL WATCH')
      .get('img').should('have.class', 'site-logo')
  })

  it('the user should be able to click on the menu icon and see a dropdown menu', () => {
    cy.get('.menu-icon').click()
      .get('.menu').should('have.class', 'menu-open')
  })

  it('the user should see a map of Colorado with markers for the recent owl observations', () => {
    cy.get('.leaflet-container').should('be.visible')
    cy.get('.leaflet-marker-icon').first()
      .should('have.attr', 'src') 
      .and('include', '/owl-icon-black');
    cy.get('.leaflet-marker-icon').should('have.length', 3)
  })

  it('the user should see a carousel of recent owl observations and should be able to click through to see more observations', () => {
    cy.get('.owl-slide').should('have.length', 3)
    cy.get('.slide-header').first().should('have.text', 'Barn Owl')
    cy.get('.slide-header').last().should('have.text', 'Burrowing Owl')
    cy.get('.swiper-button-next').click()
    cy.get('.swiper-slide-active > .owl-slide > .slide-banner > .slide-header').should('have.text', 'Great Horned Owl')
  })

  it('the user should be taken to the individual bird details page when they click on its name on the carousel', () => {
    cy.get('.swiper-slide-active > .owl-slide > .slide-banner > .slide-header').click()
    cy.url().should('include', '/explore/brnowl')
  })
})