describe('Handle Tables', (()=>{

    beforeEach('Loginpage',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login", { failOnStatusCode: false });
        cy.get("#input-username").click();
        cy.get("#input-username").type("demo");
        cy.get("#input-password").click();
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();
        cy.wait(10000);

         //Customers--> Customers

         cy.get("#menu-customer>a").click(); //customer main menu
         cy.get("#menu-customer>ul>li:first-child").click() // customer sub/child item

    })


 it('Check Number Rows & Columns',()=>{



 })

 it('Check celld ata from specific row & COlumn',()=>{



 })

 
})
)
