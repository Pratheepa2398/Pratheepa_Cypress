
/// <reference types="Cypress" />

describe('QAonCloud Website Tests', () => {
    const url = 'https://www.qaoncloud.com/';
  
    beforeEach(() => {
      cy.visit(url);
    });
  
    it('should load the QAonCloud homepage', () => {
      // Check the title of the page
      cy.title().should('include', 'QAonCloud');
    });
  
    it('should have a visible navigation bar', () => {
      // Check if the navigation bar exists and is visible
      cy.get('.elementor-button-text').should('be.visible');
    });
  
    it('should check for the "Contact Us" button', () => {
      // Verify that the "Contact Us" button is present
      cy.contains('Contact Us').should('be.visible');
    });
  
    it('should navigate to the "Contact Us" page', () => {
      // Click the "Contact Us" button and verify the navigation
      cy.contains('Contact Us').click();
      cy.url().should('include', '/contact-us'); // Update the URL check based on the actual Contact Us URL
    }); 
    
      
    it('should click the Talk To an Expert button', () => {
      cy.scrollTo('bottom')      
      cy.xpath("(//a[@class='octf-btn octf-btn-primary octf-btn-icon'])[1]").contains('Talk To an Expert').should('be.visible')
      cy.contains('Talk To an Expert').click();
      
    });
  });
  
