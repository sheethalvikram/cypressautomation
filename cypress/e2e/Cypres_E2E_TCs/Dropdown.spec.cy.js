describe("dropdown",()=>{
  it.skip("select keyword",()=>{
    cy.visit("https://www.geodatasource.com/software/country-region-dropdown-menu-demo")
    cy.get(".form-control.gds-cr[country-data-region-id='gds-cr-one']")
    .select("Angola").should("have.value","Angola")

  })

  it("dropdown without slect",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click
    cy.get("input.select2-search__field[type='text']").type("Italy").type('{enter}').should("have.text","Italy")
  })
})