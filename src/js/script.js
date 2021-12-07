let canvas;
let keyboard = new Keyboard();




let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);




    console.log('object: ', world);

}



window.addEventListener('keydown', (event) => {
    keyboard.setKeyPressed(event);
});

window.addEventListener('keyup', (event) => {
    keyboard.setKeyLeaved(event);
});