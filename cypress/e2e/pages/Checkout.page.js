class checkout{
    get firstprod(){

       return('#add-to-cart-sauce-labs-backpack')
    }
    get rmvfirstprod(){
        return('#remove-sauce-labs-backpack')
    }
    get secondprod(){
        
        return('#add-to-cart-sauce-labs-bike-light')
     }
     get thirdprod(){
        
        return('#add-to-cart-sauce-labs-bolt-t-shirt')
     }
    get password(){
        return ('#password')
    }
    get loginbutton(){
        return ('#login-button')
    }
login(){
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce').wait(100)
    cy.get('[data-test="login-button"]').click().wait(100)
}    

add1product(){
    cy.get(this.firstprod).should('be.visible')
    cy.get(this.firstprod).click()
}
add2products(){
    cy.get(this.secondprod).should('be.visible')
    cy.get(this.secondprod).click()
    cy.get(this.thirdprod).should('be.visible')
    cy.get(this.thirdprod).click()
}
checkoutflow(){
    cy.get('.shopping_cart_link').click().wait(1000)

    cy.get('[data-test="checkout"]').click()
    cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')
    //type a random first name
    let fname = (Math.random() + 1).toString(36).substring(2);
    cy.get('[data-test="firstName"]').click().type(fname)
    //type a random last name
    let lname = (Math.random() + 1).toString(36).substring(2);
    cy.get('[data-test="lastName"]').click().type(lname)
    //type a random postal code
    let pcode = Math.floor(Math.random() * 101) + 1;
    cy.get('[data-test="postalCode"]').click().type(pcode)
    cy.get('[data-test="continue"]').click().wait(2000)
    //complete checkout and ensure user is on the order confirmation page
    cy.get('[data-test="finish"]').click()
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
}

}
export default new checkout()

