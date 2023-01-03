context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5230/')
  })

  describe('logar com admin.', () => {
    it('passes', () => {
      cy.login('admin','admin')
    })
    
    it('failed', () => {
      cy.loginFail('admin2','admin')
    })
  })
})