/// <reference types="cypress" />

describe('Teste para editar um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('Borges de Medeiros')
        cy.get('input[type="email"]').type('borges@teste.com')
        cy.get('input[type="tel"]').type('54 99999999')

        cy.get('.alterar').click()
    })
})