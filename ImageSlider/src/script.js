const nextEl = document.querySelector('.btn-next')
const prevEl = document.querySelector('.btn-prev')
const imageContainerEl = document.querySelector('.images')
const images = document.querySelectorAll('img')

let currentImage = 1
let timeout

nextEl.addEventListener('click', ()=>{
    currentImage++
    clearTimeout(timeout)
    nextUpdatedImage()
})
prevEl.addEventListener('click',()=>{
    currentImage--
    clearTimeout(timeout)
    nextUpdatedImage()
})

function nextUpdatedImage(){
    if(currentImage > images.length){
        currentImage = 1
    }
    else if(currentImage < 1){
        currentImage = images.length
    }
    imageContainerEl.style.transform = `translateX(${(currentImage - 1) * -600}px)`
    timeout = setTimeout(()=>{
        currentImage++
        nextUpdatedImage()
    },3000)
}