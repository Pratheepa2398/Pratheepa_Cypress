context('UserManage API automation test', ()=>{

    it('GET-list user',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
        })
    
        it('POST-list user',()=>{
    
            var user={
                "name": "Jack",
                "job": "leader"
            }
            cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
                expect(response.status).equal(201)
                expect(response.body.name).equal(user.name)
                expect(response.body.job).equal(user.job)
            })
            })
    
            it('Update User',()=>{
    
                var user1={
                    "name": "Appu",
                    "job": "Data Scientist"
                }
    
                cy.request('PUT','https://reqres.in/api/users/2',user1).then((response)=>{
                    expect(response.status).equal(200)
                    expect(response.body.name).equal(user1.name)
                    expect(response.body.job).equal(user1.job)
    
            })
    
        })
        it('Delete User',()=>{
    
            var user1={
                "name": "Appu",
                "job": "Data Scientist"
            }
    
            cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
                expect(response.status).equal(204)
                
        })
    
    })
    
    })
    
    
    
    