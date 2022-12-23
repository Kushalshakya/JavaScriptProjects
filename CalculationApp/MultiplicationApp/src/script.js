const scoreEl = document.querySelector('.score')
const questionEl = document.querySelector('.question')
const textEl = document.querySelector('.text')
const submitEl = document.querySelector('.submit')
const formEl = document.getElementById('form')

const num1 = Math.ceil(Math.random()*50)
const num2 = Math.ceil(Math.random()*25)


let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}
questionEl.innerText = `What is ${num1} Multiply By ${num2}?`
const questionAns = num1 * num2

scoreEl.innerText = `Score : ${score}`

formEl.addEventListener('submit',()=>{
    // const submittedAns = +textEl.value
    //For Converting String into number + is written in front of the element.value
    const submittedAns = +textEl.value
    if (submittedAns === questionAns){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }


})
const countEl= document.getElementById('count')

let count = JSON.parse(localStorage.getItem("level"))
if(!count){
    count = 0
}
count++
if(count < 10){
    countEl.innerText = `0${count}`
}
else{
    countEl.innerText = `${count}`
}

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
    localStorage.setItem("level", JSON.stringify(count))
}
// localStorage.removeItem('level')

// localStorage.clear()
//localStorage.removeItem("name of the localStorage key you want to remove")
