const contentEl = document.querySelector('#content')
const videoEl = document.querySelector("#video-container")
const btnEl = document.querySelector('.btn')
const crossEl = document.querySelector('.fa-times')

btnEl.addEventListener('click', ()=>{
    videoEl.style.display = "block"
    contentEl.style.display = "none"
})

crossEl.addEventListener('click', ()=>{
    videoEl.style.display = "none"
    contentEl.style.display = "block"
})

