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
    cy.get('.page-content-container :nth-child(2) > .normal-text').should('have.text','Password')
    cy.get('.page-content-container :nth-child(1) > .normal-text').should('have.text','Username')
    cy.get('input[type="text"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('.btn-primary').click()
    cy.get('.username-text').should('be.visible').and('have.text', username)
})

Cypress.Commands.add('loginFail', (username, password) => {
    cy.get('.link-btn').click()
    cy.get('.page-content-container :nth-child(2) > .normal-text').should('have.text','Password')
    cy.get('.page-content-container :nth-child(1) > .normal-text').should('have.text','Username')
    cy.get('input[type="text"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('.btn-primary').click()
    cy.get('.content-text').should('be.visible')
})

Cypress.Commands.add('createTag', (nameTag) => {
    cy.get('.w-full > .flex').click()
    cy.get('.dialog-header-container > .title-text')
      .should('have.text','Create Tag')
    cy.get('.JoyInput-root').type(nameTag)
    cy.get('.JoyInput-endDecorator').click()
    cy.get('.close-btn').should('be.visible').click()
    cy.get('.tags-wrapper').contains(nameTag)
})