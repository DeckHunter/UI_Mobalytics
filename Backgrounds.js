
var imgFundo = window.document.body
var h1 = document.getElementById('js-h1')

function background(id){
    console.log('funcao Chamda '+id)
    if(id === 0) {
        imgFundo.style.backgroundImage= "url('img/Background.png')"
        h1.innerHTML = 'start your legend'
    }
    if(id === 1){
        imgFundo.style.backgroundImage = "url('img/csGo_bg.png')"
        h1.innerHTML = 'Strike Now!'
    }
    if(id === 2) {
        imgFundo.style.backgroundImage = "url('img/tft_bg.png')"
        h1.innerHTML = 'get better at teamfight tactics'
    }
    if(id === 3){
        imgFundo.style.backgroundImage = "url('img/magic_bg.png')"
        h1.innerHTML = 'All the strategy, All the action'
    } 
}
