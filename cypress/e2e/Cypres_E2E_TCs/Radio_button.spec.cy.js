describe("radio/checkbox button",()=>{
    it("select radion button",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should("be.visible")
        cy.get("#female").should("be.visible")

        cy.get("#male").check().should("be.checked")
        cy.log("male radio button selected")
        cy.get("#female").should("not.be.checked")
        
        cy.get("#female").check().should("be.checked")
        cy.get("#male").should("not.be.checked")
        cy.log("female radio button selected")

    })

    it("check box button",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#sunday").should("be.visible")
        cy.get("#sunday").check().should("be.checked")
        cy.log("sunday is selected")
        cy.get("#sunday").uncheck().should("not.be.checked")
        cy.log("sunday is unselected")

        cy.get("#wednesday").should("be.visible")
        cy.get("#wednesday").check().should("be.checked")
        cy.log("wednesday is selected")
        cy.get("#wednesday").uncheck().should("not.be.checked")


        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.log("all cehckboxes selected")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()


    })
})