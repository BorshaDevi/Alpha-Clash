function hiddenById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
}
function showById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}
function getContainueGame(){
    const randomAlpabateString='abcdefghijklmnopqrstuvwxyz'
    const alpabateSplit=randomAlpabateString.split('')
    const randomNumber=Math.random() * 25;
    const randomindext=Math.round(randomNumber)
    const  showgame=alpabateSplit[randomindext]
    // console.log(randomindext,showgame)
    return showgame;
}