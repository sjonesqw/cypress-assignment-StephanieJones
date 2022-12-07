import checkout from '../../e2e/page/Checkout.page'
 
describe('Checkout Workflow', () => {
 beforeEach(() => {
   cy.visit('https://www.saucedemo.com/')
 })
 
 it('Add a single item to cart and complete the checkout process', () => {
   checkout.login()
   checkout.add1product()
   checkout.checkoutflow()
 
 })
 
 it('Add 2 items to the cart and complete the checkout process', () => {
   checkout.login()
   checkout.add2products()
   checkout.checkoutflow()
 
 })
})
