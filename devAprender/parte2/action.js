let pessoa = ["Carlos", 28, true, undefined]
console.log("Tamanho do vetor é "+pessoa.length)

let corSite = "azul"

function resetaCor(corSite){
    corSite = null
    return corSite
}

function mudaCor(nova){
    corSite = nova
    return corSite
}


function corAtual(){
    console.log(corSite)
}

corAtual()

//mais de 100 ponto premium, menos, comum
let pontos = 110
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

x = false
y = false
z = true
console.log(x || y || z)

let escolha = "Vermelho" || "Azul" || "Laranja"
console.log(escolha)

escolha = "Vermelho" && "Azul" && "Laranja"
console.log(escolha)

