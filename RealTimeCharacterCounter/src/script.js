const textEl = document.querySelector('#textarea')
const totalEl = document.querySelector('.total')
const remainingEl = document.querySelector('.remaining')

textEl.addEventListener('keyup', ()=>{
    total()
})

function total(){
    let t = textEl.value.length
    if(t < 10){
        totalEl.innerText = "0" + textEl.value.length
    }
    else{
        totalEl.innerText = t
    }
    remainingEl.innerText = textEl.getAttribute('maxLength') - textEl.value.length
}