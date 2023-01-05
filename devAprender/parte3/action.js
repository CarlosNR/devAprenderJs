let x = 2

if (x==2){
    x = 3
}else if(x == 3){
    x = 4
}else{
    x = 5
}

console.log(x)

let permissao =  ["comum", "gerente", "diretor"]
var op = permissao[0]

switch (op){
    case "comum":
        console.log('usuario comum')
        break

    case "gerente":
        console.log('usuario gerente')
        break

    case "diretor":
    console.log('usuario diretor')
    break
}

for (let i=0; i<5; i++){
    console.log('Estou estudando')
}

let i = 5
while (i>0){
    console.log('Estou estudando')
    i--
}

i = 0
do{
    console.log('Estou estudando')
    i++
}while (i<10)

let pessoa = {
    nome: "Carlos",
    idade: 28
}

for (let key in pessoa){
    console.log(key, pessoa[key])
}

//versao php
//foreach ($L as $key => $l){}

//não se pode manipular valor da chave, funciona exatamente como foreach
const cores = ['Azul','Vermelho','Preto']
chave = 2
for(chave in cores){
    console.log(cores[chave])
}
console.log("")

for(cor of cores){
    console.log(cor)
}