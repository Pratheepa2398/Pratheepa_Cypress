/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Handling alerts', function () {

    beforeEach(function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
}) 
    it('Alert type', function(){ 
    cy.on('window:alert', function(alertText){
        expect(alertText).eq('I am a JS Alert')

    })
    cy.contains('Click for JS Alert').click()
    cy.wait(2000)
 })
    it('Confirm type- alert',function(){
    cy.on('window:confirm',function(confirmText){
        return false
    })
        cy.contains('Click for JS Confirm').click()
    })

       
})