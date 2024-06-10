// Handle Audio Functionalities
$('.fa-music').on('click', () => {
    const myAudio = document.getElementById('myAudio');
    if (myAudio.paused) {
        myAudio.play();
        myAudio.volume = 0.2;
    } else {
        myAudio.pause();
    }
    $('.muted').toggleClass('unmuted');
})

// Generate dynamic input
const alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArr = alphabetStr.split('');

for(let i=0; i<alphabetArr.length; i++){
    const btnEl = document.createElement('button');
    const inputEl = document.querySelector('.game-input').appendChild(btnEl);
    $(inputEl).addClass('btn btn-primary');
    inputEl.innerHTML = alphabetArr[i];
}


$(document).ready(() => {
    $('.btn-play').on('click', () => {
        $('.game-type').css("opacity","1");
        $('.play-menu').addClass('game-started');
    })


    let result = '';
  
    $('.game-categories button').each(function(index, btnCat) {
        $(btnCat).on('click', function() {
            result = $(this).html();
            console.log(result);
            $('.game-type').css("opacity","0");
            $('.game-type').addClass('game-categories-display');
        });
    });
})

