'use strict'

describe('Pruebas del login', () => {
  before(() => {
    cy.exec('npm run test:clean')
  })

  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('Debe registrar un usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.createUser(userData)
    })
  })

  it('Debe fallar con un usuario erroneo.', () => {
    cy.loginUser('fail@test.com', 'test1234')
    cy.get('.error-msg').should('be.visible')
  })

  it('Debe loguear un usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.loginUser(userData.email, userData.password)
      cy.contains('a', 'Dashboard').should('be.visible')
    })
  })

  after(() => {
    cy.log('Test finalizados')
  })
})
