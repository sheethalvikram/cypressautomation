/// <reference types="Cypress" />

import Loginpage from "../pageobjects/Loginpage.spec.cy"

describe("testsuite",()=>{
    it("demo",()=>{
     const LP =new Loginpage()
     LP.fillEmail("admin@yourstore.com")
     LP.fillPassword("admin")
     LP.Submit()
     cy.title().should("have.text","Dashboard / nopCommerce administration")
    
    })
})