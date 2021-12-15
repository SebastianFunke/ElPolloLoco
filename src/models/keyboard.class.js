class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    M = false;

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
            case 'm':
                this.M = true;
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
            case 'm':
                this.M = false;
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
            case 'm':
                return this.M;
            default:
                console.log('keyboard.class.js - unknown key: ', key);
                return false;
        }
    }
}