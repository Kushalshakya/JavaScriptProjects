"use strict"
const popupEl = document.getElementById('popup')
const buttonEl = document.querySelector('.btn')
const closeEl = document.querySelector('.fa-times')
const mainEl = document.getElementById('main')
const freeEl = document.querySelector('.free')

function blur(){
    mainEl.classList.toggle('active')
    freeEl.classList.toggle('active')
    popupEl.classList.toggle('active')
}

buttonEl.addEventListener('click',()=>{
    blur()
})

closeEl.addEventListener('click',()=>{
    blur()
})