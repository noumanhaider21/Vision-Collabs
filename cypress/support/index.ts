
import './commands'
import './logincommands'
import './highlevelcommands/employeecommands'
import './highlevelcommands/orgadmincommands'
import 'cypress-xpath'
import './orgadmincommands/projectsCommands'





Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })