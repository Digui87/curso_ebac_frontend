/// <reference types="cypress" />

describe('Teste para deletar um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve deletar um contato', () => {
        cy.get('.delete').first().click()
    })
})