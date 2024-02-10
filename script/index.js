let sapo = document.querySelector('#sapo')
let agua = document.querySelector('#agua')
let pt = document.querySelector('#pontos')
pt.value = 0
var pontuacao = pt.value



function pular(){
    if(sapo.classList != 'animar'){
        sapo.classList.add('animar')
    }

    setTimeout(()=>{
        sapo.classList.remove('animar')
    }, 800)
}


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


pt.innerHTML = pontuacao