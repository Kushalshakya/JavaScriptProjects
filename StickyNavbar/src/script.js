const header = document.querySelector(".header")

window.onscroll = function(){   
    if(window.scrollY >= 400){
        header.style.backgroundColor = "red"
    }
    else{
        header.style.backgroundColor = "#344D67"
    }
    if(window.scrollY >=900 && window.scrollY <=1700){
        header.style.backgroundColor = "green"
    }
}