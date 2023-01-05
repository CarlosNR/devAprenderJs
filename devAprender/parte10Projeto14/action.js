var nome = []
var host = []
var nomes = ["Carlos", "Janaina", "mo", "Janinha", "peste"]
var hosts = ["Carlos", "Janaina"]
function clog2(){
    

    if (document.getElementById('nome')){

        nome = document.getElementById('nome').value
        host = document.getElementById('host').value
        nome = nome.trim()
        host = host.trim()
        
        //.includes no Js in no Php
        if(nomes.includes(nome) && hosts.includes(host)){

            //super variavel global do html conteudo eh string
            document.getElementById("saida1").innerHTML = nome+" pode entrar </br>"

        }else if(!(nomes.includes(nome))){

            document.getElementById("saida1").innerHTML = nome+" não foi convidado </br>"

        }else if(!(hosts.includes(host))){

            document.getElementById("saida1").innerHTML = "Host não existe </br>"

        }


        
    }
    

}