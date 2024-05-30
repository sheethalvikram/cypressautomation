/// <reference types="Cypress" />

describe("Checkboxand dropdown",()=>{
    it("checkbox test cases",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        cy.visit("http://demo.automationtesting.in/Register.html")

        cy.get("#checkbox1").should("be.visible").check().should("be.checked").should("have.value","Cricket")
        cy.get("#checkbox2").should("be.visible").check().should("be.checked").should("have.value","Movies")
        cy.get("#checkbox3").should("be.visible").check().should("be.checked").should("have.value","Hockey")
       
        cy.get("#checkbox1").should("be.visible").uncheck().should("not.be.checked").should("have.value","Cricket")
        cy.get("[role='combobox']").click()
        
        
    })
    it("Drop down with select key test cases",()=>{
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
    
            cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get("#Skills").select("APIs").should("have.value","APIs")
        cy.get("#msdd").click()
        cy.get("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all']").contains("Arabic").click()
        cy.get("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all']").contains("Czech").click()
        cy.get("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all']").contains("Croatian").click()
        


    

        

        
    })
})