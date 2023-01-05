let x = 9
let y = 5
function max(x,y){
    return x > y ? x : y
}

console.log(max(x,y))

//construtor
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