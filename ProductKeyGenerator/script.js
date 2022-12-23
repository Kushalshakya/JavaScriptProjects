"use strict"
const btnEl = document.querySelector('.btn')
const productEl = document.querySelector('.product')


btnEl.addEventListener('click',()=>{
    productEl.innerText = update() + "-" + update() + "-" + update() + "-" + update()
})


function update(){
    const arr = "ABCDEFG123456789HIJ"
    let limit = 4;
    let store = ''
    
    for (let i=0;i<limit;i++){
        const newProductKey = Math.floor(Math.random()*arr.length)
        store += arr.substring(newProductKey, newProductKey + 1)
    }
    console.log(store)
    return store
}