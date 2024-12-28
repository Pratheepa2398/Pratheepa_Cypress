/// <reference types="Cypress" />  
describe('Drag and drop part1',()=>{

    it('Learn drag and drop',()=>{
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