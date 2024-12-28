describe('Pop Up Test Suite', () =>{

    beforeEach(() => {
        cy.viewport(990,760)
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/")
        cy.get('.ltl > :nth-child(5) > a').click()
        const pop_url = "https://www.youtube.com/c/qaboxletstest"
 
        cy.window().then(win => {

            const stub = cy.stub(win, 'open').as('windowopen')
        })
        cy.get('button#winpop').click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
        cy.window().then(win =>{

            win.location.href = pop_url
            cy.get('input#search').type('Cypress by qa box lets test {enter}')

        })
    });
    
    it('Alert - First Way', () =>{
        cy.wait(2000)
        cy.on('window:alert', alertText =>{
            expect(alertText).to.eql('I\'m an Alert Box');
    
     })
    
        cy.get('button#alert').click()
    
    });
    
    it('Alert - Second Way - Multiple Alerts', () =>{
        cy.wait(2000)
        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get('button#miltiplealert').click().then(() => {
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
            
     });
    
     it('Confirm - First Way', () =>{
        cy.wait(2000)
        cy.on('window:alert', confirmTxt =>{
            expect(confirmTxt).to.eql('I\'m a Confirm Box');
            //return true
     })
    
        cy.get('button#confirm').click()
    
    });
    
    it('Confirm - Second Way', () =>{
        cy.wait(2000)
        const stub = cy.stub()
        stub.onFirstCall().returns(true)
        cy.on('window:confirm', stub)
        cy.get('button#confirm').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')
    
    
        
     })
    
       
    
    });
    it('Prompt', () =>{
        cy.wait(2000)
        cy.window().then(win =>{
    
            const stub = cy.stub(win,'prompt')
            stub.returns('Janu')
            cy.get('button#prompt').click()
    
        })
    
    });
    
    
    it('Custom Pop Up Dialog from hidden fields', () =>{
        cy.wait(2000)
        cy.get('button#cusdiag').click()
        cy.wait(2000)
        cy.get('input#name').type('UserName')
        cy.wait(2000)
        cy.get('input#password').type('Password')
        cy.wait(2000)
        cy.contains('Submit').click()
    
    });
    
    it('Custom Pop Up Dialog from function', () =>{
        cy.wait(2000)
        cy.get('button#moddiag').click()
        cy.wait(2000)
        cy.contains('Ok').click()
        cy.wait(2000)
        // cy.contains('Close').click()
        
    
    
    });
    
    it.only('Window popup', () => {
        cy.wait(2000)
            const pop_url = "https://www.youtube.com/c/qaboxletstest/"
            cy.window().then(win => {
              const stub = cy.stub(win, 'open').as('windowopen')
            })
            cy.get('button#winpop').click()
            cy.get('@windowopen').should('be.calledWith', pop_url )
            cy.window().then(win => {
              win.location.href = pop_url
              cy.get('input#search').type('Cypress by qa box lets test{enter}')
    
    
            })
    
    
        })
    })