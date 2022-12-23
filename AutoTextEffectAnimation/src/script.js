'use strict'
const contentEl = document.querySelector('#content')

const changedText = ['Programming Enthusiastic','Student','Learner','Instructor']

let num = 0
let charIndex = 1

update()
function update(){   
    charIndex++
    contentEl.innerHTML = `
    <h1>I am ${changedText[num].slice(0,1) === "I" ? "an" : "a"} ${changedText[num].slice(0,charIndex)}</h1>
    `
    if(charIndex === changedText[num].length){
        num++
        charIndex = 0
    }
    if(num === changedText.length){
        num = 0
    }
    setTimeout(update,400)
}