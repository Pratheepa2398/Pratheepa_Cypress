describe('Handling Mouse Evnts - Part 2', function()
{
    it('Mouse events', function()
      {
    
        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(2) > .dropdown-toggle').should('be.visible')
        cy.get(':nth-child(2) > .dropdown-toggle').trigger('mousedown').click() //mousedown

        cy.get('.nav > :nth-child(4) > .nav-link').should('be.visible')
        cy.get('.nav > :nth-child(4) > .nav-link').trigger('mouseleave').click()//mouseleave

        cy.get(':nth-child(6) > .nav-link').should('be.visible')
        cy.get(':nth-child(6) > .nav-link').trigger('mouseup').click()//mouseup

        cy.get(':nth-child(1) > form > .product-thumb > .image > a > .img-fluid').should('be.visible')
        cy.get(':nth-child(1) > form > .product-thumb > .image > a > .img-fluid').trigger('mouseleft', {which: 1, pageX:600, pageY:100})
        cy.get(':nth-child(6) > .nav-link').trigger('mouseright', {which: 1, pageX:600, pageY:600})

      })

      it('MouseOver', function()
    {
        cy.visit('https://the-internet.herokuapp.com/hovers')

        cy.get(':nth-child(3) > img').should('be.visible')
        cy.get(':nth-child(3) > img').trigger('mouseover')

        cy.get(':nth-child(4) > img').should('be.visible')
        cy.get(':nth-child(4) > img').trigger('mouseover')

        cy.get(':nth-child(5) > img').should('be.visible')
        cy.get(':nth-child(5) > img').trigger('mouseover')
        
    })
        

    it('click commands', function()
      
    {      
        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(2) > .dropdown-toggle').rightclick()//Rightclick
        cy.get(':nth-child(2) > .dropdown-toggle').should('be.visible')

       
        cy.get('.nav > :nth-child(4) > .nav-link').dblclick()//dbl click
        cy.get('.nav > :nth-child(4) > .nav-link').should('be.visible')

        
        cy.get(':nth-child(6) > .nav-link').click()   //click 
        cy.get(':nth-child(6) > .nav-link').should('be.visible')          
    

      })

    it('Check and Uncheck', function()
      {
         cy.visit('https://the-internet.herokuapp.com/checkboxes')

         cy.get('[checked=""]').should('be.visible')
         cy.get('[checked=""]').not('[disabled]').uncheck() 

         cy.get('#checkboxes > :nth-child(1)').should('be.visible')
         cy.get('#checkboxes > :nth-child(1)').not('[disabled]').check() 
         


      })
    })