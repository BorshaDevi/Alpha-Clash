// function play(){
//     const playNow=document.getElementById('home-screen')
//     playNow.classList.add('hidden')
//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function play(){
    hiddenById('home-screen')
    showById('play-ground')
    continueGame()
}
function continueGame(){
    const alpabate=getContainueGame()
    console.log('Your Alpabate is',alpabate)
}