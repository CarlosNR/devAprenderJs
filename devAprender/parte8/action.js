const numeros = [1,2,3]
const numeros2 = [1,2,3]

//adiciona no inicio
numeros.unshift(0)
numeros2.unshift(0)


// posição de inicio, quantos valores deletar a partir do inserido, item a ser inserido
numeros2.splice(1,2,'a')

console.log(numeros)
console.log(numeros2)

//insere no fim
numeros.push(5)
numeros2.push('a')

console.log(numeros)

// retorna -1 se nao encontrar
console.log(numeros.indexOf('a'))
console.log(numeros2.indexOf(3))

//ultima posição em que item aparece
console.log(numeros2.lastIndexOf('a'))

// retorna true se item ta no array
console.log(numeros.includes('a'))
console.log(numeros2.includes('a'))

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]

// retorna oq função mandar para tipos referencia (objeto/array/etc)

const marca = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(' ')
console.log(marca)

//ARROW FUNCTION, remove palavra function
//se for 1 parametro n precisa de () nem return
//se for 0 parametros precisa de ()
const arrow = marcas.find((marca) => {
    return marca.nome === 'a'
})

console.log(arrow)

const arrow2 = marcas.find(marca => marca.nome === 'a')

console.log(arrow2)

let vet = [1,2,3]
let v = vet.pop()
console.log(" ")
console.log(v)

let vet2 = [1,2,3,4,5]
let meio = vet2.splice(2,2)

console.log(vet2)
console.log(meio)
console.log(" ")


//vet 3 se comporta como um ponteiro pra mesma posição de memoria q vet2, alterando um, altera o outro tb
let vet3 = vet2

// apaga apenas vet2
vet2 = []
console.log(vet2)


vet2 = [1,2,3]
vet3 = vet2

// apaga todas as referencias
vet2.length = 0
console.log(vet3)
console.log("")


let vet4 = [1,2,3]
let vet5 = vet4

//tambem apaga todas as referencias
vet4.splice(0,vet4.length)
console.log(vet5)

const primeiro = [1,2,3]
const segundo = [4,5,6]

//combinar
const combinado = primeiro.concat(segundo)
console.log(combinado)

//dividir : slice(primeiro e ultimo indice -1)
const dividido = combinado.slice(2,5)
//com 1 parametro, pega deleta do inico à posição indicada
const dividido2 = combinado.slice(3)

console.log(dividido)
console.log(dividido2)

console.log(" ")
const terceiro = [...primeiro,...segundo,7]
console.log(terceiro)

//valor, posição, todos os valores
terceiro.forEach((numero,chave,c) => console.log(numero+" na posição "+chave+" "+c))

console.log(" ")
const quarto = [1,2,3,4]

//join junta palavras unindo-as com um caracter para string
console.log(quarto)
const unir = quarto.join('.')
console.log(unir)

//separa palavras ao encontrar caracter em array
const frase = "ola, seja bem vindo"
const result = frase.split(' ')
console.log(frase)
console.log(result)
