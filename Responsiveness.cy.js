context('Page Responsiveness Test', function()
{
    it('Amazon Login Page-Desktop', function()
{
    cy.visit('https://www.amazon.in/')
    cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
    cy.get('.a-form-label').should('be.visible', 'Enter or phone')

})

it('Amazon Login Page-Iphone', function()
{
    cy.viewport('iphone-xr')
    cy.visit('https://www.amazon.in/')
    cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
    cy.get('.a-form-label').should('be.visible', 'Enter or phone')
    
})

it('Amazon Login Page-Macbook-11', function()
{
    cy.viewport('iphone-xr')
    cy.visit('https://www.amazon.in/')
    cy.wait(2000)
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('.a-form-label').should('be.visible', 'Enter or phone')
    
})
})