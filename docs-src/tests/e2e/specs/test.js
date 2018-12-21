// https://docs.cypress.io/api/introduction/api.html

describe('Vue Resize', () => {
  it('works', () => {
    cy.visit('/')
    cy.contains('Resize: 0')
    cy.get('.change').click()
    cy.contains('Resize: 1')
    cy.get('.change').click()
    cy.contains('Resize: 2')
    cy.get('.toggle').click()
    cy.get('.change').click()
    cy.get('.change').click()
    cy.contains('Resize: 2')
    cy.get('.toggle').click()
    cy.get('.change').click()
    cy.contains('Resize: 3')
  })
})
