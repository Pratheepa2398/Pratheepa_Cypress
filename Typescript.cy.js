describe('Typescript', function(){

    it('Basic typescript', function(){
  
     cy.visit('https://www.google.com/')
     cy.get('#APjFqb')
     cy.get('[name="q"]')
     .type('Automation using cypress')
     .type('{enter}')
    
})
})
