describe("web elemts hanlde",()=>{
    beforeEach("Login",()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("#menu-customer>ul>li:first-child").click()
        cy.wait(8000)
   })
   it("num of rows and colums",()=>{
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","10")
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","7")

   })
   it("to check cell data",()=>{
    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(8)>td:nth-child(3)")
    .contains("demo234566@gmail.com")
   })
   it("read all col and row data",()=>{
    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each(($row, index, $rows)=>{
        cy.wrap($row).within(()=>{

            cy.get("td").each(($col, index, $cols)=>{
                cy.log($col.text())

            })
        })

    })
   })
})