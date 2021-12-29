let canvas;
let keyboard = new Keyboard();




let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}



window.addEventListener('keydown', (event) => {
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