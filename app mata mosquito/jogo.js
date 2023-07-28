//Primeiro: descobrir a altura e a largura da pagina
let altura = 0
let largura = 0

//função para atualizar o tamanha da pagina caso o usuario a redimensione 
function ajustaTamanhoPalcoJogo(){
altura = window.innerHeight
largura = window.innerWidth
console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)

   if( document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
   }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90 
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() +  ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

    
    
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
    
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    
    } 
}