import cypress = require("cypress");
import orgadminpage from "../../pageObjects/highlevelpages/orgadminpage";

const orgadmin = new orgadminpage;


Cypress.Commands.add("orgProjects", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.projects).click()
})
Cypress.Commands.add("orgWorkload", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.workload).click()
})
Cypress.Commands.add("orgDayplanner", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.dayplanner).click()
})
Cypress.Commands.add("orgVideocall", ()=>{
    cy.xpath(orgadmin.menu).click({force: true})
    cy.xpath(orgadmin.videocall).click()
})
Cypress.Commands.add("orgTeamscheduler", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.teamscheduler).click()
})
Cypress.Commands.add("orgFiles", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.files).click()
})
Cypress.Commands.add("orgHumanresource", ()=>{
    cy.xpath(orgadmin.menu).click()

    cy.xpath(orgadmin.humanresource).click()
})
Cypress.Commands.add("orgEmployees", ()=>{
    cy.xpath(orgadmin.employees).click()
})
Cypress.Commands.add("orgAssets", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.assets).eq(0).click()
})
Cypress.Commands.add("orgAssetallocation", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.assetallocation).click()
})
Cypress.Commands.add("orgDailyattendence", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.dailyattendence).click()
})
Cypress.Commands.add("orgAttendence", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.attendence).eq(1).click({force: true})
})
Cypress.Commands.add("orgLeaverequest", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.leaverequest).click({force: true})
})
Cypress.Commands.add("orgUsers", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.users).click()
})
Cypress.Commands.add("orgDepartments", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.departments).click()
})
Cypress.Commands.add("orgLatecoming", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.latecoming).click()
})
Cypress.Commands.add("orgTeams", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.teams).click()
})
Cypress.Commands.add("orgSuggestions", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.suggestions).click()
})
Cypress.Commands.add("orgHolidays", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.holidays).click()
})
Cypress.Commands.add("orgEvents", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.events).click()
})
Cypress.Commands.add("orgFilehr", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.filehr).eq(0).click()
})
Cypress.Commands.add("orgFilecategory", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.filecategory).click()
})
Cypress.Commands.add("orgFinance", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.finance).click()
})
Cypress.Commands.add("orgDashboardfinance", ()=>{
    cy.xpath(orgadmin.dashboardfinance).click()

})
Cypress.Commands.add("orgBillablehours", ()=>{
    
    cy.wait(5000)
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.finance).click()
    cy.xpath(orgadmin.billablehours).click()

})
Cypress.Commands.add("orgCreateinvoice", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.finance).click()
    cy.xpath(orgadmin.createinvoice).click()
})
Cypress.Commands.add("orgInvoices", ()=>{
    
    cy.xpath(orgadmin.menu).click({force: true})
    cy.xpath(orgadmin.invoices).click()
})
Cypress.Commands.add("orgIncome", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    //cy.xpath(orgadmin.finance).click()
    cy.xpath(orgadmin.income).click()
})
Cypress.Commands.add("orgProvidentfund", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.providentfund).click({force: true})
})
Cypress.Commands.add("orgExpense", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.expense).click()
})
Cypress.Commands.add("orgSalaries", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.salaries).click()
})
Cypress.Commands.add("orgLoans", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.loans).click()
})
Cypress.Commands.add("orgCashcategory", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.cashcategory).click()
})
Cypress.Commands.add("orgSettings", ()=>{
    cy.xpath(orgadmin.menu).click()

    cy.xpath(orgadmin.settings).click()
})
Cypress.Commands.add("orgTrash", ()=>{
    cy.xpath(orgadmin.trash).click()

})
Cypress.Commands.add("orgUserrole", ()=>{
    cy.xpath(orgadmin.menu).click({force: true})
    cy.xpath(orgadmin.userrole).click()
})

Cypress.Commands.add("orgManagemenus", ()=>{
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.managemenus).click()
})

Cypress.Commands.add("orgAssignrolebasedmenus", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.assignrolebasedmenus).click()
})

Cypress.Commands.add("orgOrganizations", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.organizations).click()
})

Cypress.Commands.add("orgNewuser", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.newuser).click()
})

Cypress.Commands.add("orgClients", ()=>{
    
    cy.xpath(orgadmin.menu).click()
    cy.xpath(orgadmin.clients).click()
})

Cypress.Commands.add("orgProjectsettings", ()=>{
    
    cy.xpath(orgadmin.menu).click({force: true})
    cy.xpath(orgadmin.projectsettings).click()
})


