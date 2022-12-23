const hideListEl = document.querySelector('.hidelist')
const listEl = document.querySelector('.list')
const addListEl = document.querySelector('.addlist')
const ulListEl = document.querySelector('.ullist')
const userInputEl = document.querySelector('.userinput')

const errorEl = document.querySelector('#todo-error')
const toDoHelpEl = document.querySelector('#todo-help')
const helpCloseEl = document.querySelector('.help-close')

helpCloseEl.addEventListener('click',()=>{
       toDoHelpEl.classList.toggle('active')
})

hideListEl.addEventListener('click',()=>{
    listEl.classList.toggle('active')
})

addListEl.addEventListener('click',listAdd)

userInputEl.addEventListener('keyup',(key)=>{
    if(key.which === 13){
        listAdd()
    }
})

const thisEl = document.querySelector('#this')
function listAdd(){
    if(userInputEl.value === ""){
        errorEl.style.display = "block"
        setTimeout(()=>{
            errorEl.style.display = "none"
        },2000)
    }
    else if(userInputEl.value === "/help" || userInputEl.value === "/HELP"){
        toDoHelpEl.classList.toggle('active')
        userInputEl.value = ""
    }
    else if(userInputEl.value === "do a barrel roll" || userInputEl.value === "Do A Barrel Roll"){
        // todoEl.style.tranform = "rotateX(340deg)"
        thisEl.classList.toggle('active')
        userInputEl.value = ""
    }
    else{
        const adder = document.createElement('li')
        adder.innerHTML = userInputEl.value
        ulListEl.appendChild(adder)
        userInputEl.value = ""
    }
}
