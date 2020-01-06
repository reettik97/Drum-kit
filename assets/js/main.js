window.addEventListener('keydown' , function (e){
   const music = this.document.querySelector(`audio[data-key = "${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if(!music){return;}
   music.currentTime = 0;
   music.play();
   key.classList.add('playing');
//    console.log(music);
});

function removetransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
 
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend' , removetransition))