
describe('EAApp Automation Test', () => {
  
    // Run before each test
    beforeEach(() => {
      // Visit the homepage of the website
      cy.visit('http://eaapp.somee.com/');
    });
    
    it('should load the homepage successfully', () => {
      // Verify if the title is correct
      cy.title().should('include', 'Execute Automation Employee App');
    });
  
    it('should display the Login page', () => {
      // Find the login button and click it
      cy.get('a[href="/Account/Login"]').click();
      
      // Verify if the login page is displayed
      cy.url().should('include', '/Account/Login');
      cy.get('h2').should('contain.text', 'Login');
    });
  
    it('should perform a login operation', () => {
      // Navigate to the login page
      cy.get('a[href="/Account/Login"]').click();
  
      // Type the username and password in respective fields
      cy.get('input[name="UserName"]').type('admin123');
      cy.get('input[name="Password"]').type('Password@123');
  
      // Click on the login button
      cy.get('input[type="submit"]').click();
  
      // Verify if the login was successful (e.g., redirected to home page or dashboard)
      cy.url().should('include', 'eaapp.somee');
      cy.title().should('include', 'Execute Automation Employee App');
    });
  
    it('should navigate to the Employee Index page', () => {
      // Click on the Employees menu
      cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click()
      
  
      // Verify the employee page is loaded
      cy.url().should('include', 'Employee');
      cy.get(':nth-child(3) > a').should('contain.text', 'Employee List');
    });
  
    it('should search a employee record', () => {
      // Navigate to the Employee page
      cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click()
      
      //Search for the employee
      cy.get('[type="text"]').type('Selena');
      cy.get('.btn').click();      
      
        
      // Verify if the employee was successfully searched
      cy.get('.body-content').should('contain', 'Selena');
    });
  });
  
  
