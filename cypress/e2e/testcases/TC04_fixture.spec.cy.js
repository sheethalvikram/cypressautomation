
/// <reference types="Cypress" />


describe("fixture test cases",()=>{
    before(function(){
        cy.fixture("C:\Users\Tundra\Videos\CypressAuto\cypress\fixtures\example.json").then(function(data){
            this.data=data
        })
    })
    
     it("test caes",()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").type(this.data.email)
        cy.get("#Password").type(this.data.password)
        cy.get("button[type='submit']").click()
     })

})