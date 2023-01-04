context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5230/')
  })

  describe('Create memos', () => {
    it('Passes - Create memos no tag', () => {
      let textMemo = 'create memo no tag'
      cy.login('admin','admin')
      cy.get('.confirm-btn').should('have.attr','disabled')
      cy.get('.common-editor-inputer').type(textMemo)
      //cy.scrollTo('top')
      cy.get('.confirm-btn').click()
      cy.get('.memo-content-wrapper > .memo-content-text > p')
        .first()
        .should('have.text', textMemo)
      cy.get('.memo-top-wrapper > .status-text-container > .time-text:first').should('have.text','a few seconds ago')
    
    })

    it('Passes - Create memos tag', () => {
      let textMemo = 'create memo tag',
          nameTag = 'cypress'
      cy.login('admin','admin')
      cy.createTag(nameTag)
      cy.get('.confirm-btn').should('have.attr','disabled')
      cy.get('.tag-action').trigger('mouseover')
      cy.contains('.tag-list > .item-container', nameTag).click()
      cy.get('.common-editor-inputer').type(textMemo)
      cy.get('.confirm-btn').click()
      cy.get('.memo-content-wrapper > .memo-content-text > p:first').should('have.text', textMemo)
      cy.get('.memo-top-wrapper > .status-text-container > .time-text:first').should('have.text','a few seconds ago')
    
    })
  })
})