'use strict'

describe('Pruebas del login', () => {
  it('Debe cargar el login', () => {
    cy.visit('/login')
  })

  it('Debe registrar un usuario', () => {
    cy.visit('/login')
    cy.contains('Crear una cuenta').click()
    cy.get('#name').type('Usuario de prueba')
    cy.get('#title').type('Compañia de prueba')
    cy.get('#email2').type('test@test.com')
    cy.get('#password2').type('test1234')
    cy.contains('.button', 'Registrarse').click()
    cy.wait(3000)
  })

  it('Debe loguear un usuario', () => {
    cy.visit('/login')
    cy.get('#email1').type('test@test.com')
    cy.get('#password1').type('test1234')
    cy.contains('.button', 'Ingresar').click()
    cy.wait(3000)
  })
})
