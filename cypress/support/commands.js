// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('.link-btn').click()
    cy.get(':nth-child(1) > .input-text').type(username)
    cy.get(':nth-child(2) > .input-text').type(password)
    cy.get('.btn-primary').click()
    cy.get('.username-text').should('be.visible').and('have.text',username)
})

Cypress.Commands.add('loginFail', (username, password) => {
    cy.get('.link-btn').click()
    cy.get(':nth-child(1) > .input-text').type(username)
    cy.get(':nth-child(2) > .input-text').type(password)
    cy.get('.btn-primary').click()
    cy.get('.content-text').should('be.visible')
})