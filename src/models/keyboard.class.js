class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    setKeyPressed(keyCode) {
        switch (keyCode['key']) {
            case 'ArrowUp':
                this.UP = true;
                break;
            case 'ArrowDown':
                this.DOWN = true;
                break;
            case 'ArrowLeft':
                this.LEFT = true;
                break;
            case 'ArrowRight':
                this.RIGHT = true;
                break;
            case 'd':
                this.D = true;
                break;
            case ' ':
                this.SPACE = true;
                break;
        }

    }

    setKeyLeaved(keyCode) {
        switch (keyCode['key']) {
            case 'ArrowUp':
                this.UP = false;
                break;
            case 'ArrowDown':
                this.DOWN = false;
                break;
            case 'ArrowLeft':
                this.LEFT = false;
                break;
            case 'ArrowRight':
                this.RIGHT = false;
                break;
            case ' ':
                this.SPACE = false;
                break;
            case 'd':
                this.D = false;
                break;

        }
    }

    getPressedKey(key) {
        switch (key) {
            case 'up':
                return this.UP;
            case 'down':
                return this.DOWN;
            case 'left':
                return this.LEFT;
            case 'right':
                return this.RIGHT;
            case 'space':
                return this.SPACE;
            case 'd':
                return this.D;
            default:
                console.log('keyboard.class.js - unknown key: ', key);
                return false;
        }
    }
}