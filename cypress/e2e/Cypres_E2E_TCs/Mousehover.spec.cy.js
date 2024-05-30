describe("mouse operations",()=>{
    it("mouse hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click()
        cy.wait(6000)
        cy.get(".dropdown-menu>a:first-child").should("be.visible")
        cy.log("PC option is seen")
    })
    it("right click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu").click()

    })
    it.only("double click",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[ondblclick='myFunction1()']").trigger("dblclick").click()
        cy.get("#field2").contains("Hello World!")
    })
    it("drag and rop",()=>{

    })
    it("scrool into view",()=>{
        
    })
})