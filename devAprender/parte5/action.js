function Celular1(marcaCelular, tamanhoTela, capacidadeBateria){

    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Ligando...")
    }

}

class Celular2{

    constructor(marcaCelular, tamanhoTela, capacidadeBateria){
        this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function(){
            console.log("Ligando...")
        }
    }    
    
}

let celular1 = new Celular1('Xiaomi', 6.5, 5000)
let celular2 = new Celular2('Asus', 6, 4000)

console.log(celular1)
console.log(celular2)

function criarCelular(marcaCelular,tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Ligando...")
        }
    }
}

let xiaomi = criarCelular('Xiaomi', 5.5, 5000)

console.log(xiaomi)