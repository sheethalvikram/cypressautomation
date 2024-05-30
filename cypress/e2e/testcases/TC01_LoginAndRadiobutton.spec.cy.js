

describe("LoginAndRadiobutton",()=>{
    it("Login tetscases",()=>{

        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.log("Page loaded")

        cy.get("input[name='userName']").should("be.visible").type("mercury")
        cy.get("input[name='password']").should("be.visible").type("mercury")
        cy.get("input[value='Submit']").should("be.visible").click()
        cy.log("logged in successfully")

        //Radio button
        cy.visit("https://demo.guru99.com/test/newtours/reservation.php")
        cy.get("input[value='oneway']").should("be.visible").should("not.be.selected").click()
        cy.get("input[value='Business']").click()

    })

})