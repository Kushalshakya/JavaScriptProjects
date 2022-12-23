const imageEl = document.getElementById('image-container')

window.addEventListener('scroll',()=>{
    imageEl.style.opacity = 1 - window.pageYOffset/ 800
})