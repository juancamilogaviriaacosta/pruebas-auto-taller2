var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('cosmefulanitog88@gmail.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('cosmefulanitog88');

        cajaLogIn.element('button=Ingresar').click()

        browser.waitForVisible('#cuenta', 5000);
        browser.click('#cuenta')
    });

    it('Creacion de cuenta con usuario existente', function () {
        //browser.init()
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombre = cajaSignUp.element('input[name="nombre"]');
        var apellido = cajaSignUp.element('input[name="apellido"]');
        var correo = cajaSignUp.element('input[name="correo"]');
        var password = cajaSignUp.element('input[name="password"]');

        nombre.click();
        nombre.keys('pruebas');

        apellido.click();
        apellido.keys('automaticas');

        correo.click();
        correo.keys('cosmefulanitog88@gmail.com');

        password.click();
        password.keys('cosmefulanitog88');

        browser.waitForVisible('button=Registrarse', 5000);
        browser.click('button=Registrarse');

        browser.getText('Ocurrió un error activando tu cuenta');
    });
});
