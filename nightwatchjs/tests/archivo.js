
//Pruebas 3 y 4
module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes prueba busqueda profesor y filtro por materia': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .click('.Select-placeholder')
      .setValue('.Select-input input[role="combobox"]', 'juan')
      .waitForElementVisible('.Select-menu-outer', 10000)
      .waitForElementVisible('.Select-menu', 10000)
      .waitForElementVisible('.Select-option', 10000)
      .click('.Select-option')
      .waitForElementVisible('.materias', 10000)
      //.check('.materias input[type="checkbox"]')
      //.assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  }
};
