/// <reference types="Cypress" />


describe('Projects', () => {
    

    it('Add project', () => {

        cy.loginUi('irfan@xevensolutions.com','mirfanxeven512')
        cy.addProject()
   })
})