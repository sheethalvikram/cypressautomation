/// <reference types="Cypress" />

describe("alerts",()=>{
   /* it("Alert test cases",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[onclick='myFunctionAlert()']").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("I am an alert box!")

        })


    })*/
    /*it("Confirm test cases",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[onclick='myFunctionConfirm()']").click()
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("Press a button!")
            cy.get("#demo").should("have.text","You pressed OK!")

        })


    })*/
    it("Prompt test cases",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[onclick='myFunctionPrompt()']").click()
        cy.window().then(win){
            cy.stub(win,"Prompt").returns("sheethal")

        }


    })
    
})