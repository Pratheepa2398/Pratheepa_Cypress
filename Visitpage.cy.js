/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  
  describe('My First Test', () =>
  
  {
    it('verify title-positive', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq','OrangeHRM')
    })
    it('verify title-negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.title().should('eq','OrangeHRM123')
      })
  
  })