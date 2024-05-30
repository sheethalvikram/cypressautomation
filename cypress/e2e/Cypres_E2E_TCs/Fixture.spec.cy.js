describe("fixture data",()=>{
    it("normal fixture data",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("prangehrms").then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(':nth-child(2) > .oxd-main-menu-item').should("have.text","PIM")
        })
    })
})