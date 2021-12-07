class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;

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
            default:
                console.log('keyboard.class.js - unknown key: ', key);
                return false;
        }
    }
}