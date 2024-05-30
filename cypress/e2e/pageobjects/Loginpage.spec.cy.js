/// <reference types="Cypress" />

class Loginpage
{
visit()
{
    cy.visit("https://admin-demo.nopcommerce.com/login")
    cy.wait(3000)
}

fillEmail(value){
    const field=cy.get("#Email")
    field.clear()
    field.type(value)
    return this
}

fillPassword(value){
    const filed=cy.get("#Password")
    filed.clear()
    filed.type(value)
    return this
}
Submit()
{
    const filed=cy.get("button[type='submit']")
    filed.click()

}

}
export default Loginpage


  