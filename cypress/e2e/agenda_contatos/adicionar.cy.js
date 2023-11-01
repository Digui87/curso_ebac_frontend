/// <reference types="cypress" />

describe('Teste para adicionar contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar um contato', () => {
        cy.get('.sc-gLDzan').first().click()
        cy.get('input[type="text"]').type('Diagnas Salvador')
        cy.get('input[type="email"]').type('salvador@teste.com')
        cy.get('input[type="tel"]').type('54 12345698')

        cy.get('.adicionar').click()
    })
})