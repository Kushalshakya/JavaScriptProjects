const btnEl = document.querySelector('#btn')

btn.addEventListener('mouseover',(event)=>{
    const x = event.pageX - btnEl.offsetLeft
    const y = event.pageY - btnEl.offsetTop

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})