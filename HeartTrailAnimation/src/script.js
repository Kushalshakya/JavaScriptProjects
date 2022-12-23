"use strict"
const bodyEl = document.querySelector('body')

bodyEl.addEventListener('mousemove',(event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const chld = document.createElement('span')
    bodyEl.appendChild(chld)
    chld.style.top = yPos + "px"
    chld.style.left = xPos + "px"
    setTimeout(() => {
        chld.remove()
    }, 3000);
    
    const size = Math.random()*100;
    chld.style.width = size + "px"
    chld.style.height = size + "px"

})