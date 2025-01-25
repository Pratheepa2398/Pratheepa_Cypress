describe('Intercept Network Request', ()=>
{
    it('Test API with simple intercept', ()=>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept.html")

        cy.intercept({
            path:'users?_limit=3'
         }).as('comments')

     cy.get('#loadThreeUsersXHR',{timeout:10000}).click()
     cy.wait('@comments').then(intercept =>{
        cy.log(JSON.stringify(intercept))  
console.log (JSON.stringify(intercept))
expect(intercept.response.body).to.have.length(3)
})
        })
        it('mocking with intercept Test with static response', ()=>{
            cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept.html")

            cy.intercept('GET','users?_limit=3',{totalposts:5,name:'Ervin Howell'}).as('comments')
            cy.get('#loadThreeUsersXHR',{ timeout: 10000 }).click()
            cy.wait('@comments')
})
it('mocking with intercept Test with dynamic fixture', ()=>{
    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept.html")

    cy.intercept('GET','users?_limit=3',{fixture:'createuser.json'}).as('comments')
    cy.get('#loadThreeUsersXHR',{ timeout: 10000 }).click()
    cy.wait('@comments')
})
     })

    

