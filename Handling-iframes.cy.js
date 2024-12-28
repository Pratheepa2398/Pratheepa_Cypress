/// <reference types="cypress" />
import 'cypress-iframe'

describe('Handling Frames', () =>{

    it('approach1', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe=cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("Welcome to iframe test {cmd+a}");
            cy.get("[aria-label='Bold']").click();
            cy.wait(4000);
    })
     
    it('approach2 using cypress-iframe plugin', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded('#mce_0_ifr'); // load the frame

        cy.iframe('#mce_0_ifr').clear().type("Testing Cypress iframe using plugin");
        cy.wait(4000);



    })

    it('approach3 using cypress custom command', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded('#mce_0_ifr'); // load the frame

        cy.iframe('#mce_0_ifr').clear().type("Testing Cypress iframe using custom command {cmd+a}");

        cy.get("[aria-label='Bold']").click();
        cy.wait(4000);


    })

})