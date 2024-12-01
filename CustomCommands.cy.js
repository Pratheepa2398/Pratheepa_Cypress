/// <reference types="Cypress" />


describe("CustomCommands",() => {

    it("LoginTest",()=> {
     cy.login('admin@yourstore.com','admin') //valid
     cy.title().should('be.equal','Your store. login')
     cy.wait(2000)
     cy.login('admin@yourstore.com','admin123') // invalid
     cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
     cy.wait(2000)
     cy.login('admin123@yourstore.com','admin') // invalid
     cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
     cy.wait(2000)

    })

    it('Add Customer', () => {
        //Login script
        cy.login('admin@yourstore.com','admin')

        //script for adding new customer
        cy.log('Adding Customer.......')

    })

    it('Edit Customer', () => {
        //Editing script
        cy.login('admin@yourstore.com','admin')

        //script for editing new customer
        cy.log('Editing Customer.......')

    })


    })