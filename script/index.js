let sapo = document.querySelector('#sapo')
let agua = document.querySelector('#agua')
let pt = document.querySelector('#pontos')
pt.innerHTML = 0
let pontuacao = 0

agua.classList.add('animar_agua_0')

function pular(){
    if(sapo.classList != 'animar_sapo'){
        sapo.classList.add('animar_sapo')
    }


    setTimeout(()=>{
        sapo.classList.remove('animar_sapo')
    }, 800)
}


var aumentarPontuacao = setInterval((evt)=>{
    pontuacao += 10
    pt.innerHTML = pontuacao
}, 1000)

var testarColisao = setInterval(()=>{

    var topoSapo = parseInt(
        window.getComputedStyle(sapo).getPropertyValue('top')
    )
    
    var topoAgua = parseInt(
        window.getComputedStyle(agua).getPropertyValue('top')
    )

    if(topoAgua > 430 && topoAgua < 600 && topoSapo >= 430){
        agua.style.animation = 'none'
        sapo.style.diaplay = 'none'
        alert('Você perdeu, reinicie a página.')
    }

}, 10)

var testarVitória = setInterval(()=>{

    var topoSapo = parseInt(
        window.getComputedStyle(sapo).getPropertyValue('top')
    )
    
    var topoAgua = parseInt(
        window.getComputedStyle(agua).getPropertyValue('top')
    )

    if(pontuacao == 1000){
        agua.style.animation = 'none'
        sapo.style.diaplay = 'none'
        alert('Você Ganhou.')
    }

}, 500)
