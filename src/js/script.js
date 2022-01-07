let canvas;
let keyboard = new Keyboard();
let sounds = new Sounds();
let world;

/**
 * initial function called on body onLoad
 */
function init() {

}

function showCanvas() {
    document.getElementById('canvasSection').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}
/**
 * adds an event listener when a key is on key down
 */
window.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyboard.setKeyPressed(event);
});

/**
 * adds an event listener when a key is on key up
 */
window.addEventListener('keyup', (event) => {
    keyboard.setKeyLeaved(event);
});

/**
 * function to set the canvas to fullscreen
 */
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

/**
 * function to mute the sound
 */
function toggleMute() {
    sounds.mute = !sounds.mute;
    if (sounds.mute) {
        document.getElementById('btnMute').src = 'src/img/mute.png';
    } else {
        document.getElementById('btnMute').src = 'src/img/volume.png';
    }
}