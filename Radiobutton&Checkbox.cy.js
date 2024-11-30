/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });


describe('First Task', function()
{

    it('verify inputbox & Radio Buttons', function()
    {
        cy.visit("https://demo.automationtesting.in/")
        cy.url().should('include', 'automationtesting')

        cy.get('#btn2').click()
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView()
        cy.wait(2000)

        //Input Box handling
        cy.get('input[placeholder="First Name"]').should('be.visible').should('be.enabled').type("Janaki")
        cy.wait(2000)

        cy.get('input[placeholder="Last Name"]').should('be.visible').should('be.enabled').type("Thirumalai")
        cy.wait(2000)

        cy.get('input[type="email"]').should('be.visible').should('be.enabled').type("janaki@qaoncloud.com")
        cy.get('input[type="tel"]').should('be.visible').should('be.enabled').type("8056272452")
        cy.wait(2000)


        //Radio buttons single click
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').should('be.visible').should('not.be.checked').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').should('be.visible').should('not.be.checked').click()
        cy.wait(2000)


        //checkbox single select
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')
        cy.wait(2000)


        //checkbox unselect
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        

        //checkbox multiple select
        cy.get('[type="checkbox"]').check(['Cricket', 'Hockey'])


    }

)

it('dropdowns', function()
{

    cy.visit("https://demo.automationtesting.in/")
    cy.url().should('include', 'automationtesting')

    cy.get('#btn2').click()
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView()
    cy.wait(2000)
   
    //Single select dropdown
    cy.get('#Skills').select('Android').should('have.value','Android')
    cy.get('#Skills').select('AutoCAD').should('have.value','AutoCAD')
})

it('Languages Multi-select', function()
{
    cy.visit("https://demo.automationtesting.in/")
    cy.url().should('include', 'automationtesting')

    cy.get('#btn2').click()
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView()
    cy.wait(2000)

    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    //cy.get('.ui-corner-all').contains('Japanese').click()

})



})