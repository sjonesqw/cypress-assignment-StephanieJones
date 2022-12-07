const userdata = require("../data/userdata")
var users = Object.values(userdata)
 
describe('Login using the user creddntials from the userdata file',() =>{
   it('passes',()=>{
       cy.visit('https://www.saucedemo.com/')
 
       for( var x=0;x<users.length;x++){
           cy.get('[data-test="username"]').click().type(users[x].username)
           cy.get('[data-test="password"]').click().type(users[x].password).wait(100)
           cy.get('[data-test="login-button"]').click().wait(100)
           if(users[x].username=='locked_out_user'){
               cy.get('[data-test="error"]').should('include.text','Sorry, this user has been locked out')
               cy.get('[data-test="username"]').clear()
               cy.get('[data-test="password"]').clear()
           }else{
               cy.go('back')
           }
       }
   })
})
