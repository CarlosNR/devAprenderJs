nomes = []
comentarios = []

// function clog(){

//     if (document.getElementById('nome')){
        
//         //pelo amor do inferno, NÃO usar document.writeln, que cria uma pg nova
//         document.getElementById("saida1").innerHTML = "</br>" + document.getElementById('nome').value+" comentou: </br>"+document.getElementById('comentario').value
//     }

// }

function clog2(){
    

    if (document.getElementById('nome')){

        nomes = document.getElementById('nome').value
        comentarios = document.getElementById('comentario').value

        //super variavel global do html conteudo eh string
        document.getElementById("saida1").innerHTML += "</br>" + nomes+" comentou: </br>"+comentarios+"</br>"
        
    }
    

}