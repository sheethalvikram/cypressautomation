import 'cypress-iframe'

describe("approach1",()=>{
    it("ifroame laod",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
       const iframe= cy.get("#mce_0_ifr").
        its("0.contentDocument.body").
        should("be.visible").
        then(cy.wrap)
        iframe.clear("#mce_0_ifr").type("Welcome {ctrl+a}")

    })

    it.only("ifroame plugin laod",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
       cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear().type("Welcome")

    })
})