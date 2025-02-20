/// <reference types="cypress-downloadfile"/>
describe('File Upload and Download Test', () => {
    it('File Upload', () => {
    
      cy.visit("https://the-internet.herokuapp.com/upload")
      cy.xpath("(//input[@id='file-upload'])[1]").attachFile(['Pic2.png']);
      cy.xpath("(//input[@id='file-submit'])[1]").click();

      cy.get('h3').should('be.visible','File Uploaded!'); 
      cy.wait(4000);
    })

    it('File Rename',()=>{

      cy.writeFile('cypress/fixtures/sample2.txt', 'Hello World')
      cy.readFile('cypress/fixtures/sample1.txt').then((text) => {
      expect(text).to.equal('Hello All Hello all') // true
      })

    })

})