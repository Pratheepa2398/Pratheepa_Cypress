/// <reference types="cypress-downloadfile"/>
describe('File Multiple Upload', () => {
    it('File Upload', () => {
    
      cy.visit("https://demo.automationtesting.in/FileUpload.html")
      cy.wait(3000);
      cy.xpath("(//input[@id='input-4'])[1]").attachFile(['Pic2.png','Pic3.jpg','sample1.txt']);
      cy.wait(5000);
      cy.xpath("(//div[@class='container'])[3]").should('be.visible',['Pic2.png','Pic3.jpg','sample1.txt']);


    })

    it('drag and drop',()=>{
        cy.viewport(990,760)
        cy.visit('https://vishalok12.github.io/jquery-dragarrange/');
        cy.wait(2000)
        cy.get('.draggable-element.d-1').drag('.draggable-element.d-3',{force:true})
        cy.wait(2000)
        cy.get('.draggable-element.d-4').drag('.draggable-element.d-2',{force:true})
        cy.wait(2000)
        cy.get('.draggable-element.d-3').drag('.draggable-element.d-4',{force:true})
    });

})