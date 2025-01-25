/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });


describe('mysuite',()=>{
    it('Login to Amazon',() => {

        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type("+918056272452")
        cy.wait(2000)
        cy.get(".a-button-inner > #continue").click();
        cy.wait(2000)
        cy.get('#ap_password').type("Angalya*2621")
        cy.wait(2000)
        cy.get('#signInSubmit').click();
        //cy.pause();
        //cy.get('#input-box-otp').type('905590')
       // cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click();
         

        //Search Products

        cy.get('#twotabsearchtextbox').type("laptops")
        cy.get('#nav-search-submit-button').click();

        // Scroll to the middle of the page
        cy.scrollTo('50%', '50%');

        //Add a product to the cart
        cy.get('#a-autoid-11-announce').click();
        cy.scrollTo('right');
        cy.get('.a-spacing-base > .a-button > .a-button-inner > .a-button-text').click();
        cy.wait(2000);
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
        cy.get('#nav-checkout-cart-icon').click()
       
        
    

        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').click();
        cy.wait(2000)
       // cy.get(':nth-child(4) > .a-radio > label > .a-icon').click();
       cy.get(':nth-child(7) > .a-radio > label > .a-icon').click();
        cy.wait(2000)
        cy.get('.a-button-input').click();
        cy.get('#sc-active-61ec7862-6585-4892-9da6-1ce3ae5d8d4c > .sc-list-item-content > .a-grid-vertical-align > :nth-child(3) > .sc-action-links > .sc-action-delete > .a-declarative > .a-color-link').click();
        cy.get('#sc-active-f8a56981-0252-4097-9abd-94960b5c04c7 > .sc-list-item-content > .a-grid-vertical-align > :nth-child(3) > .sc-action-links > .sc-action-save-for-later > .a-declarative > .a-color-link').click();

    })    


})
