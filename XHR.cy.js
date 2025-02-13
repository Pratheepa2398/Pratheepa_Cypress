describe('Intercept Test Suite', () =>{

    beforeEach(() => {
        cy.viewport(990,760)
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept")
    
    
    });

    it("SPY - INTERCEPT FETCH GET Request -3 Users", () => {
       
        cy.wait(5000)
       
        cy.intercept('GET','/users*').as("users");
        cy.get("#loadThreeUsersFETCH").click();
        cy.wait(5000)
        cy.wait("@users")
       // .its("status")
       // .should("be.eq", 200);
       
        cy.get("#xhrusers > tbody >tr").should("have.length", 1);

        
    })

    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR POST Request", () => {
       // cy.server();
        cy.wait(5000)
        cy.intercept('POST','/users').as("users");

        const user = {
            name: "Prathee",
            email: "pratheepadass@gmail.com",

      }

      cy.get("#xhrname").type(user.name);
      cy.get("#xhremail").type(user.email);
      cy.get("#xhrbtn").click();
      cy.wait(5000)

cy.wait("@users").then((xhr) =>{

   // expect(xhr.status).to.eql(201);
    expect(xhr.response.body.name).to.eql(user.name);    
    expect(xhr.response.body.email).to.eql(user.email); 
});

cy.get("#xhrspan").should("contain.text", `${user.name} - ${user.email}`);



});

it("STUB - INTERCEPT VIA SERVER-ROUTE XHR GET Request -3 Users", () => {
    // cy.server();
    cy.wait(5000)
     cy.intercept('GET','/users*', "fixtures:user.json").as("users");

    
     cy.get("#loadThreeUsersFETCH").click();
     cy.wait(5000)
     cy.wait("@users");
     cy.get("#xhrusers > tbody >tr").should("have.length", 1);

});

it("SPY - INTERCEPT FETCH GET Request - 3 Users", () => {
    // cy.server();
    cy.wait(5000)
     cy.intercept({

        pathname:"/users",
        method:"GET",
        query:{
            
            _limit:'3'

        }
        }).as("users");
        cy.get("#loadThreeUsersFETCH").click();
        cy.wait(5000)



     });

     it("STUB - INTERCEPT FETCH GET Request - 3 Users", () => {
        // cy.server();
        cy.wait(5000)
         cy.intercept({
    
            pathname:"/users",
            method:"GET",
            query:{
                
                _limit:'3'
    
            },
        
         }, {
            fixture:"user.json",

        }).as("users");
            cy.get("#loadThreeUsersFETCH").click();
            cy.wait(5000)
    
    
    
         });
    
         it("STUB - INTERCEPT FETCH GET Request - 5 Users", () => {
            // cy.server();
            cy.wait(5000)
             cy.intercept({
        
                pathname:"/users",
                query:{
                    
                    _limit:'5'
        
                },
            
             
            }).as("users");
                cy.get("#loadFiveUsersFETCH").click();
                cy.wait(5000)
        
                cy.get("#fetchusers > tbody >tr").should("have.length", 5);

        
             });

             it("SPY - INTERCEPT FETCH GET Request -Single User", () => {

                cy.wait(5000)
               
                 cy.intercept('GET','/users*', "fixtures:user.json").as("users");
        
                 cy.get("#loadSpecificUserFETCH").click();
                 cy.wait(5000)
                 //cy.wait("@users");
                 cy.get("#fetchusers > tbody >tr").should("have.length", 1);
            
            });
              
            it("SPY - INTERCEPT FETCH POST Request", () => {
                cy.wait(5000)
                // cy.server();
                 
         
                 const user = {
                     name: "Prathee",
                     email: "pratheepadass@gmail.com",
         
               };

               cy.intercept({
    
                pathname:"/users",
                method:"POST",
    
            }).as("users");

         
               cy.get("#fetchname").type(user.name);
               cy.get("#fetchemail").type(user.email);
               cy.get("#fetchbtn").click();
               cy.wait(5000)
         
               cy.wait("@users").then((obj) =>{

                // expect(obj.status).to.eql(201);
                 expect(obj.response.body.name).to.eql(user.name);    
                 expect(obj.response.body.email).to.eql(user.email); 
             });
         
         cy.get("#fetchspan").should("contain.text", `${user.name} - ${user.email}`);
         
         
         
         });
         
    
     
})