"use strict"
const containerEl = document.querySelector('#image-container')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    loadMore()
})


function loadMore(){
    for(let i=0;i<5;i++){
        const newImages = document.createElement('img')
        newImages.src = `https://picsum.photos/250?random=${Math.floor(Math.random()*1000)}`
        containerEl.appendChild(newImages)
    }
}