//escape
const msg = 'Olá, \n' +
'\'seja\' bem vindo'

//Olá,
// 'seja' bem vindo
console.log(msg)

//template literal -> mantem espaços e pontuação exatamente como escrito
let nome = 'Jana'
const outra = `Olá ${nome}

Não se esqueça de tomar o remedinho 

Bjo.
`
console.log(outra)

//date

let data1 = new Date() //data de hj
let data2 = new Date('November 24 2022 11:00')
// ano mes dia mes ano, começa a contar no 0 no mes
let data3 = new Date(2022, 10, 24, 11, 30)

console.log(data1)
console.log(data2)
console.log(data3)

data3.setFullYear(2030)
console.log(data3)

//data pra string
data2.toDateString()
console.log(data2)

//formato de banco de dados
data2.toISOString()
console.log(data2)

function criarEndereco (rua, cidade, cep) {
    return{
        rua,
        cidade,
        cep,
        exibirEndereco(){
            console.log(endereco)
        }
    }
}

let endereco = criarEndereco("Dos bobos", "Não tinha teto", 0)
let endereco2 = criarEndereco("Dos bobos", "Não tinha teto", 0)
let endereco3 = endereco2

endereco.exibirEndereco()

function mesmaMemoria(endereco, endereco2){
    return endereco === endereco2
}

function mesmoConteudo(endereco, endereco2){
    return endereco.cep === endereco2.cep
}

console.log(mesmaMemoria(endereco, endereco2)) //false
console.log(mesmoConteudo(endereco, endereco2)) //true
console.log(mesmoConteudo(endereco2, endereco3)) //true

let Celular3 = {
    marca: "xiaomi",
    ligar(){
        console.log("Ligando...")
    }
}

console.log(Celular3)

class Postagem{
    constructor(
        titulo,
        mensagem,
        autor,
        visualizacoes,
        autor1,
        autor2,
        msg1,
        msg2
    ){
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = visualizacoes,
        this.comentarios = [
            {autor: autor1, mensagem: msg1},
            {autor: autor2, mensagem: msg2}
            
        ],
        this.estaAoVivo = true
    }
}

let postagem1 = new Postagem('a','b','c',10,'a','a','b','b')
console.log(postagem1)

function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),
]

console.log(faixas)

let str = [
    ['a','b'],
    ['c','d']
]

console.log(str)
