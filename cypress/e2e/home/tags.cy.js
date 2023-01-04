context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5230/')
  })

  describe('Create tag in modal', () => {
    it('Passes - Create tag modal', () => {
      let nameTag = 'tagCypress'
      cy.login('admin','admin')
      cy.get('.w-full > .flex').click()
      cy.get('.dialog-header-container > .title-text')
        .should('have.text','Create Tag')
      cy.get('.JoyInput-root').type(nameTag)
      cy.get('.JoyInput-endDecorator').click()
      cy.get('.close-btn').should('be.visible').click()
      cy.get('.tags-wrapper').contains(nameTag)
    })
    it('Failed - Create tag modal', () => {
      let nameTag = '2!@#'
      cy.login('admin','admin')
      cy.get('.w-full > .flex').click()
      cy.get('.dialog-header-container > .title-text')
        .should('have.text','Create Tag')
      cy.get('.JoyInput-root').type(nameTag)
      cy.get('.JoyInput-endDecorator').click()
      cy.get('.toast-list-container').should('be.visible')
      cy.get('.content-text').should('have.text','Invalid tag name')
    })
  })
})