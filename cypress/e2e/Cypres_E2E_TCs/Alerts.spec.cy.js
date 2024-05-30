describe("Alerts",()=>{
    it("basic alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get ("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })

    it("confiramtion alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get ("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
            //cy.get("#result").should("have.text","You clicked: Ok")
        })
        cy.on('window:confirm',()=>false);
        cy.get("#result").should("have.text","You clicked: Cancel")
    })

    it("prompt alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsPrompt()']").click()
        cy.window().then((win) =>{
            cy.log("hi")
            cy.stub(win,'prompt').returns("hello");
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should("have.text","You entered: hello")

    })
})
   