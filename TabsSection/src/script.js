const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click',()=>{
    content1.style.display = "block"
    content2.style.display = "none"
    content3.style.display = "none"
})
btn2.addEventListener('click',()=>{
    content1.style.display = "none"
    content2.style.display = "block"
    content3.style.display = "none"
})
btn3.addEventListener('click',()=>{
    content1.style.display = "none"
    content2.style.display = "none"
    content3.style.display = "block"
})

$(document).on("click","#container .btn-container button",function(){
    $(this).addClass("live").siblings().removeClass("live");
});