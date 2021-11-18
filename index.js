//Primer entregable - Cajero Automático
var Client = /** @class */ (function () {
    function Client(nombre, apellido, password, saldo) {
        var _this = this;
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.saldo = saldo;
        this.verificarContraseña = function (contraseña) {
            if (_this.password === contraseña) {
                console.log("Bienvenid@ " + _this.nombre + " " + _this.apellido);
            }
            else {
                console.log('Contraseña inválida');
            }
        };
        this.obtenerSaldo = function () {
            console.log("Tu saldo es: " + _this.saldo + " soles");
        };
        this.retirarDinero = function (retiro) {
            console.log("Has retirado: " + retiro + " soles. Tu saldo es: " + (_this.saldo - retiro) + " soles");
        };
    }
    return Client;
}());
var carlos = new Client('Carlos', 'Castillo', 1111, 1500);
var jesus = new Client('Jesus', 'Ramos', 1234, 3000);
var diego = new Client('Diego', 'Perez', 5555, 1000);
var andrea = new Client('Andrea', 'Silva', 2233, 600);
andrea.verificarContraseña(2233);
andrea.obtenerSaldo();
andrea.retirarDinero(125);
