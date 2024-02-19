// function play(){
//     const playNow=document.getElementById('home-screen')
//     playNow.classList.add('hidden')
//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }
function handleKeyboardPress(){
    console.log('button click')
}
document.addEventListener('keyup',handleKeyboardPress)
function play(){
    hiddenById('home-screen')
    showById('play-ground')
    continueGame()
}
function continueGame(){
    const alpabate=getContainueGame()
    const currentAlphabet=document.getElementById('currentalphabet')
    currentAlphabet.innerText=alpabate;
    setBackgroundColor(alpabate)
}