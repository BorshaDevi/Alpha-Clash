function hiddenById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
}
function showById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}