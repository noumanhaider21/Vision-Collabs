import cypress = require("cypress");
import projectsPage from '../../pageObjects/orgadminpages/projectsPage';

const projObject = new projectsPage;

Cypress.Commands.add("addProject", ()=>{

    cy.xpath(projObject.menu).click()
    cy.xpath(projObject.projects).click()
    cy.xpath(projObject.startnewproject).click()
    cy.xpath(projObject.projectname).type('Project name')
    cy.xpath(projObject.projectcategory).select("Social Messenger")
    cy.xpath(projObject.projectcode).type('00123')
    cy.xpath(projObject.projectdescription).type('ddddddddddddddddddddddd')
    cy.xpath(projObject.projecturl).type('http://vcdev.azurewebsites.net/__/#')
    const targetDate = Cypress.moment()
  .add(1, 'year')
  .add(1, 'month')
  .add(1, 'day')
  .format('MM/DD/YYYY')   // adjust format to suit the apps requirements

cy.get('input[id="date-picker-inline"]')
  .clear()
  .type(`${targetDate}{enter}`)  // presume you need the enter key to trigger an event 
    cy.xpath(projObject.projectstatus).select("On Track")
    cy.xpath(projObject.currencytype).select("US Dollar")
    cy.xpath(projObject.projectprice).type('5000')
    cy.xpath(projObject.projectleader).select("Ayaz Qaiser")
    cy.xpath(projObject.projectteam).select("Vision Collab")


})