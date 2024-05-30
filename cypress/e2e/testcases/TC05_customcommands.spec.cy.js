
/// <reference types="Cypress" />


describe("fixture test cases",()=>{
        it("test caes",()=>{
        cy.login("admin@yourstore.com","admin")
        cy.log(".............login cases ")
     })
    
     it("add caes",()=>{
        cy.login("admin@yourstore.com","admin")
        cy.log(".............add cases ")
     })

     it("edit caes",()=>{
        cy.login("admin@yourstore.com","admin")
        cy.log(".............edit cases ")
     })
})