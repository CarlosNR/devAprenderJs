const mouse = {
    cor : 'red',
    marcar: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocaDPI = function () {
    console.log("mudando DP I")
}

//objetos totalmente dinamicos
console.log(mouse)
delete mouse.marcar
console.log(mouse)

//clonar objetos

const celular = {
    marcaCelular : 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function (){
        console.log("Ligando")
    }
}

//assign (pra onde vai a copia, copiado)
const novoObjeto = Object.assign({},celular)

console.log(novoObjeto)
console.log()

const novoObjeto2 = Object.assign({
    bateria: "5000"
},celular)

console.log(novoObjeto2)
console.log()

const novoObjeto3 = {...celular}
console.log(novoObjeto3)

const msg1 = 'bom dia'
const msg2 = new String ('boa tarde')

console.log(typeof(msg1))
console.log(typeof(msg2))
 
console.log(msg2.length)
console.log(msg1.length)

console.log(msg1.includes("bom"))
console.log(msg2.includes("boa"))

console.log(msg1.startsWith("bom"))
console.log(msg2.startsWith("tarde"))

console.log(msg1.endsWith("bom"))
console.log(msg2.endsWith("tarde"))

console.log(msg1.indexOf("bom"))
console.log(msg2.indexOf("tarde"))

//msg1.replace('palavra a ser trocada', 'pelo que vai ser trocado')

console.log(msg1.replace('boa', 'péssima'))
//como classe string salva a kd caracter, replace n funciona
console.log(msg2.replace('boa', 'péssima'))

console.log(msg1)
console.log(msg2)

let msg3 = ' bom   dia '
let msg4 = new String (' boa   tarde ')
// trim tira expaço excessivo dos lados, mas nao do meio
console.log(msg3.trim())
console.log(msg4.trim())

//split transforma string e objeto em objeto, onde cada palavra é um item
msg3 = msg3.trim().split(" ")
msg4 = msg4.trim().split(" ")

console.log(typeof(msg3))
console.log(msg3)

console.log(typeof(msg4))
console.log(msg4)

//da erro mesmo sendo objeto. .split() impossibilita .replace depois

// console.log(msg4.replace('boa', 'péssima'))

msg4 = msg4.join()
console.log(typeof(msg4))
console.log(msg4.replace('boa', 'péssima'))


console.log("")


//porcentagem aleatoria
console.log("porcentagem aleatoria "+Math.random())
//retira apenas inteiro de float
console.log("Float para Int "+Math.trunc(3.5))
//função teto
console.log("Teto "+Math.ceil(3.5))
//função piso
console.log("Piso "+Math.floor(3.5))
//arredondamento
console.log("Arredondamento "+Math.round(3.5))
//menor valor
console.log("Menor valor "+Math.min(1,9))
// maior valor
console.log("Maior valor "+Math.max(1,9))