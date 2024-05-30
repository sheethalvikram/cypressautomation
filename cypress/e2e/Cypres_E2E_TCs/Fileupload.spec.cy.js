import 'cypress-file-upload'

describe("file upload",()=>{
    it("single file",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("resume.text")
        cy.get("#file-submit").click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })
    it("srename file",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:"resume.text", fileName:"test1.text"})
        cy.get("#file-submit").click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })
    it.only("multiple file",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile(["resume.text","UX Designer Resume copy.pdf"])
        cy.get("#file-submit").click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })
    it.only("drag n drop file",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile(["resume.text",{subjectType:"drag-n-drop"}])
        cy.get("#file-submit").click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })

})