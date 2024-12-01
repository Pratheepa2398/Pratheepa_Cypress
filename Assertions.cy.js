describe("Assertions",() => {

    it("Implicit Assertion",()=> {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
     // should and verifying url

     cy.url().should('include','orangehrmlive.com')
     .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     .and('contain','orangehrm')  
     .and('not.contain','bluehrm')  //negative condition
     
     // should and verifying title
     cy.title().should('include','Orange')
     .and('eq',"OrangeHRM")
     .and('contain','HRM') 
     
     // verifying logo image is visible
     cy.get('.orangehrm-login-branding > img').should('be.visible')
     .and('exist')
     
     cy.get("input[placeholder='Username']").type("Admin") // provide a value inputbox

     cy.get("input[placeholder='Username']").should('have.value','Admin') //value 
    })

     it("Explicit Assertion",()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         
        cy.get("input[placeholder='Username']").type("Admin") 
        cy.get("input[placeholder='Password']").type("admin123") 
        cy.wait(2000)
        cy.get("button[type='submit']").click() 

        let expName="Mostafa Selim";
        cy.get(".oxd-userdropdown-name").then( (x)=>{
        let actName=x.text()

         // BDD Style
        expect(actName).to.equal(expName)
        
         

         // TDD Style
        assert.equal(actName,expName)
        
        
 })
     })
})