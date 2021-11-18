//Primer entregable - Cajero Automático

class Client {

    constructor(
        public nombre:string,
        public apellido:string,
        public password:number,
        public saldo:number
    ){ 

    }

    public verificarContraseña =(contraseña:number)=>{
        if(this.password === contraseña){
            console.log(`Bienvenid@ ${this.nombre} ${this.apellido}`);
        } 
        else {
            console.log('Contraseña inválida');
        }
    }

    public obtenerSaldo = ()=>{ 
        console.log(`Tu saldo es: ${this.saldo} soles`)
    }

    public retirarDinero = (retiro:number)=>{
        if(this.saldo >= retiro){
            console.log(`Has retirado: ${retiro} soles. Tu saldo es: ${this.saldo - retiro} soles`)
        }
        else {
            console.log('La cantidad ha retirar excede a tu saldo. Ingresar una nueva cantidad')
        }
        
    }
}

let carlos = new Client('Carlos', 'Castillo', 1111, 1500);
let jesus = new Client('Jesus', 'Ramos', 1234, 3000);
let diego = new Client('Diego', 'Perez', 5555, 1000);
let andrea = new Client('Andrea', 'Silva', 2233, 600);


andrea.verificarContraseña(2233);
andrea.obtenerSaldo();
andrea.retirarDinero(700);