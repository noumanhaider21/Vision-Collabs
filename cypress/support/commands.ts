// import cypress = require("cypress");
import loginPage from "../pageObjects/loginPage";

const objlogin = new loginPage();

Cypress.Commands.add("loginUi", (email,password) => {

    cy.visit('http://vcdev.azurewebsites.net/')
    cy.xpath(objlogin.login).click()
    cy.xpath(objlogin.email).type(email)
    cy.xpath(objlogin.password).type(password)
    cy.xpath(objlogin.submit).click()
    cy.wait(5000)
    cy.url().should("eq",'http://vcdev.azurewebsites.net/dashboard')
})

