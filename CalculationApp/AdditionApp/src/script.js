const formEl = document.querySelector('.form')
const scoreEl = document.querySelector('.score')
const questionEl = document.querySelector('.question')
const textEl = document.querySelector('.text')
const submitEl = document.querySelector('.submit')

const add1 = Math.ceil(Math.random()* 47)
const add2 = Math.ceil(Math.random()* 25)

let score = JSON.parse(localStorage.getItem('score'))
if(!score){
    score = 0
}
questionEl.innerText = `What is ${add1} Addition ${add2}?`
const questionAns = add1 + add2

// localStorage.removeItem(score)

scoreEl.innerText = `Score : ${score}`

formEl.addEventListener('submit',()=>{
    const submittedAns = +textEl.value
    if(submittedAns === questionAns){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }
})
function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score))
}