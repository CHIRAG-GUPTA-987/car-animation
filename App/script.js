let audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
let bod = document.querySelector('body');
bod.addEventListener('mouseover', ()=>{
    audio.loop = true;
    audio.play();
})
