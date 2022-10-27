/// <reference types="Cypress" />


describe('Highlevel Test of VC Organization admin', () => {
    

    it('Login Organization admin to VC', () => {

        cy.loginUi('irfan@xevensolutions.com','mirfanxeven512')

   })

    it('Projects', () => {

       cy.orgProjects()

 
 
   })
   it('Workload', () => {

    cy.orgWorkload()



})
it('Day planner', () => {

    cy.orgDayplanner()



})
it('Video call', () => {

    cy.orgVideocall()



})
it('Team Scheduler', () => {

    cy.orgTeamscheduler()



})
it('Files', () => {

    cy.orgFiles()



})
it('Human Resource', () => {

    cy.orgHumanresource ()



})
it('Employees', () => {

    cy.orgEmployees()



})
it('Assets', () => {

    cy.orgAssets()



})
it('Assets Allocation', () => {

    cy.orgAssetallocation()



})
it('Daily Attendance', () => {

    cy.orgDailyattendence()



})
it('Attendance', () => {

    cy.orgAttendence()



})
it('Leave Request', () => {

    cy.orgLeaverequest()



})
it('Users', () => {

    cy.orgUsers()



})
it('Departments', () => {

    cy.orgDepartments()



})
it('Late coming', () => {

    cy.orgLatecoming()



})
it('Teams', () => {

    cy.orgTeams()



})
it('Suggestions', () => {

    cy.orgSuggestions()



})
it('Holidays', () => {

    cy.orgHolidays()



})
it('Events', () => {

    cy.orgEvents()



})
it('Files', () => {

    cy.orgFilehr()



})
it('File category', () => {

    cy.orgFilecategory()



})
it('Finance', () => {

    cy.orgFinance()



})
it('Dashboard', () => {

    cy.orgDashboardfinance()



})
it('Billable hours', () => {

    cy.orgBillablehours()



})
it('Create Invoice', () => {

    cy.orgCreateinvoice()



})
it('Invoices', () => {

    cy.orgInvoices()



})
it('Income', () => {

    cy.orgIncome()



})
it('Provident fund', () => {

    cy.orgProvidentfund()



})
it('Expense', () => {

    cy.orgExpense()



})
it('Salaries', () => {

    cy.orgSalaries()



})
it('Loans', () => {

    cy.orgLoans()



})
it('Cash category', () => {

    cy.orgCashcategory()



})
it('Settings', () => {

    cy.orgSettings()



})
it('Trash', () => {

    cy.orgTrash()



})
it('User role', () => {

    cy.orgUserrole()



})
it('Manage Menus', () => {

    cy.orgManagemenus()



})
it('Assign role based menus', () => {

    cy.orgAssignrolebasedmenus()



})
it('Organizations', () => {

    cy.orgOrganizations()



})
it('New User', () => {

    cy.orgNewuser()



})
it('Clients', () => {

    cy.orgClients()



})
it('Project settings', () => {

    cy.orgProjectsettings()



})
})