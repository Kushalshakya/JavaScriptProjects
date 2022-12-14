const inputEl = document.querySelector('.input')
const body = document.querySelector('body')

inputEl.checked = JSON.parse(localStorage.getItem('count'));

function update(){
    if(inputEl.checked){
        body.style.backgroundColor = "black"        
    }
    else{
        body.style.backgroundColor = "white"
    }
}
inputEl.addEventListener('load',update())
inputEl.addEventListener('input',()=>{
    update()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem('count', JSON.stringify(inputEl.checked))
}
