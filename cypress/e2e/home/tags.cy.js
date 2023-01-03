context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5230/')
  })

  describe('Create tag in modal', () => {
    it('passes', () => {
      cy.login('admin','admin')
      cy.get('.w-full > .flex').click()
      cy.get('.dialog-header-container > .title-text')
        .should('have.text','Create Tag')
      cy.get('.JoyInput-root').type('tagCypress')
      cy.get('.JoyInput-endDecorator').click()
      cy.get('.close-btn').should('be.visible').click()
      cy.get('.tags-wrapper').contains('tagCypress')
    })
    it('Failed', () => {
      cy.login('admin','admin')
      cy.get('.w-full > .flex').click()
      cy.get('.dialog-header-container > .title-text')
        .should('have.text','Create Tag')
      cy.get('.JoyInput-root').type('2!@#')
      cy.get('.JoyInput-endDecorator').click()
      cy.get('.toast-list-container').should('be.visible')
    })
  })
})