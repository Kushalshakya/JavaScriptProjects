function animateBg(i) {
    document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';
    
    setTimeout(function() {
        animateBg(++i)
    }, i);
}
animateBg(0);

const kits = ['snare','kick','crash','drum']

const container = document.querySelector('.btn-container')
kits.forEach((kit)=>{
    const btnEl = document.createElement('button')
    btnEl.classList.add('btn')
    btnEl.innerText = kit
    container.appendChild(btnEl)
    const audioEl = document.createElement('audio')
    
    btnEl.style.backgroundImage = "url(src/images/"+ kit +".png)"


    audioEl.src = "src/sounds/" + kit + ".mp3";
    btnEl.appendChild(audioEl)

    btnEl.addEventListener('click', ()=>{
        audioEl.play()
    })

    window.addEventListener('keydown',(pressed)=>{
        if(pressed.key == kit.slice(0,1)){
            audioEl.play()
            btnEl.style.transform = "scale(.8)"
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)"
            },100)
        }
    })
})
