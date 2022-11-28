/// <reference types="Cypress" />


describe('Highlevel Test of VC Employee', () => {
    

     it('Login Employee to VC', () => {

        cy.loginUi('noumanhaider21@gmail.com','123456')
    })

     it('Dashboard', () => {


        cy.empDashboard()  
    })
    it('Notice Board', () => {


        cy.empNoticeboard()
  
    })
    it('Stats', () => {
        
        cy.empStats()

  
    })
    it('Projects', () => {


        cy.empProjects()
  
    })
    it('Attendance', () => {


        cy.empAttendance
  
    })
    it('Day planner', () => {


        cy.empDayplanner()
  
    })
    it('Feedback', () => {


        cy.empFeedback()
  
    })
    it('Templates', () => {


        cy.empTemplates
  
    })
    it('Assign Feedback', () => {

        cy.empAssignfeedback

  
    })
    it('Feedback Review', () => {


        cy.empFeedbackreview
    })
    it('Give Feedback', () => {


        cy.empGivefeedback()
        
        
  
    })
})
