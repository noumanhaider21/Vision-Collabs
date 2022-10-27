import cypress = require("cypress");
import employeepage from "../../pageObjects/highlevelpages/employeepage";

const emp = new employeepage;

Cypress.Commands.add("empDashboard",()=>{
    cy.xpath(emp.menu).click()
    cy.xpath(emp.dashboard).click()
})

Cypress.Commands.add("empNoticeboard",()=>{
    cy.xpath(emp.menu).click()
    cy.xpath(emp.noticeboard).click()
})
Cypress.Commands.add("empStats",()=>{
    
    cy.xpath(emp.menu).click({force: true})
    cy.xpath(emp.stats).click()
})
Cypress.Commands.add("empProjects",()=>{
    cy.xpath(emp.menu).click()
    cy.xpath(emp.projects).click()
})
Cypress.Commands.add("empAttendance",()=>{
    cy.xpath(emp.menu).click()
    cy.xpath(emp.attendance).click()
})
Cypress.Commands.add("empDayplanner",()=>{
    
    cy.xpath(emp.menu).click()
    cy.xpath(emp.dayplanner).click()
})
Cypress.Commands.add("empFeedback",()=>{
    
    cy.xpath(emp.menu).click()
    cy.xpath(emp.feedback).click()
})
Cypress.Commands.add("empTemplates",()=>{
    cy.xpath(emp.templates).click()

})
Cypress.Commands.add("empAssignfeedback",()=>{
    
    cy.xpath(emp.menu).click()
    cy.xpath(emp.assignfeedback).click()
})
Cypress.Commands.add("empFeedbackreview",()=>{
    cy.xpath(emp.menu).click()
    //cy.xpath(emp.feedbackreview).click()
})
Cypress.Commands.add("empGivefeedback",()=>{
    
    //cy.xpath(emp.menu).click()
    cy.xpath(emp.givefeedback).click()
})
