/*
describe('Los estudiantes login exitoso', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    
    })
})

describe('Creacion de cuenta con usuario existente', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("pruebas")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("automaticas")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("cosmefulanitog88@gmail.com")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("cosmefulanitog88")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ocurrió un error activando tu cuenta')
    
    })
})
*/

describe('Los estudiantes login exitoso', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.Select-placeholder').click()
      cy.get('.Select-input').find('input[role="combobox"]').type("juan").wait('1000')
      cy.get('.Select-menu-outer').click()
    })
})

