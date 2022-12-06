describe('Adds 2 items to the cart then removes both of them. Removes one using the button in the cart, and the other using the button on the product list page', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce').wait(100)
    cy.get('[data-test="login-button"]').click().wait(100)
    //add two items to cart
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_link').click().wait(2000)
    //verify user can remove an item using button in shopping cart
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.wait(2000)
    //cy.get('[data-test="continue-shopping"]').click()
    //negative test to ensure that bike light was removed from cart
    //cy.get('.shopping_cart_link').click().should('not.include.text', 'Sauce Labs Bike Light')
    //return to inventory page
    cy.get('[data-test="continue-shopping"]').click()
    cy.wait(1000)
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    //remove onesie using button on the product list page
    cy.get('#remove-sauce-labs-onesie').click()
    cy.wait(2000)
    //verify that shopping cart is empty
    cy.get('.shopping_cart_link').click().wait(1000)
    
  })
})