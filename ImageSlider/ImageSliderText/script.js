const nextEl = document.querySelector('.btn-next')
const prevEl = document.querySelector('.btn-prev')
const sliderEl = document.querySelector('.content')

let num = 1

nextEl.addEventListener('click',()=>{
    num++
    nextSlide()
})
function nextSlide(){
    sliderEl.style.transform = `translateX(${(num - 1) * -500}px)`
}