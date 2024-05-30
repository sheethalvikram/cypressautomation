describe("handle child window",()=>{
    it("approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example >a").invoke("removeAttr","target").click()
        cy.wait(5000)
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new")
        cy.go("back")
    })
})