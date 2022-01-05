let canvas;
let keyboard = new Keyboard();
let sounds = new Sounds();



let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}



window.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyboard.setKeyPressed(event);
});

window.addEventListener('keyup', (event) => {
    keyboard.setKeyLeaved(event);
});

function setFullscreen() {
    elem = document.getElementById('canvas');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function toggleMute() {
    sounds.mute = !sounds.mute;
    if (sounds.mute) {
        document.getElementById('btnMute').src = 'src/img/mute.png';
    } else {
        document.getElementById('btnMute').src = 'src/img/volume.png';
    }
    console.log(sounds.mute);
}