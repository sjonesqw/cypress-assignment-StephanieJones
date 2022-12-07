var products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
var prices =['29.99','9.99','15.99','49.99','7.99','15.99']
 
describe(' Selects nthe different sort options and verif that them products are sorted correctly', () => {
 beforeEach(() => {
   cy.visit('https://www.saucedemo.com/')
 })
 it('sort products A-Z', () =>{
   //cy.visit('https://www.saucedemo.com/')
   cy.get('[data-test="username"]').click().type('standard_user')
   cy.get('[data-test="password"]').click().type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.product_sort_container').select('az')
   var AZlist = products.sort()
 
   cy.get('.inventory_item_name').each(($name, index) => {
     expect($name.text()).equal(AZlist[index])
 })
 
  
 })
 it('sort products Z-A', () =>{
   cy.get('[data-test="username"]').click().type('standard_user')
   cy.get('[data-test="password"]').click().type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.product_sort_container').select('za')
   var ZAlist = products.sort().reverse()
 
   cy.get('.inventory_item_name').each(($name, index) => {
     expect($name.text()).equal(ZAlist[index])
 })
 
 
 })
 it('sort products by price low to high', () =>{
   cy.get('[data-test="username"]').click().type('standard_user')
   cy.get('[data-test="password"]').click().type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.product_sort_container').select('lohi')
   var lohilist = prices.sort(function(a, b){return a - b})
   for (var x=0;x<lohilist.length;x++) {
     lohilist [x]="$"+lohilist[x]
   }
 
 
   cy.get('.inventory_item_price').each(($price, index) => {
     expect($price.text()).equal(lohilist[index])
 })
 })
 it('sort products by price high to low', () =>{
   cy.get('[data-test="username"]').click().type('standard_user')
   cy.get('[data-test="password"]').click().type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.product_sort_container').select('hilo')
   var hilolist = prices.sort(function(a, b){return a - b}).reverse()
   // for (var x=0;x<hilolist.length;x++) {
   //   hilolist [x]="$"+hilolist[x]
   // }
 
 
   cy.get('.inventory_item_price').each(($price, index) => {
     expect($price.text()).equal(hilolist[index])
 })
 })

})