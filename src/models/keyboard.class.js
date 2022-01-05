class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    /**
     * sets the associated variable of the key that was pressed to true
     * on key down event
     * @param {string} keyCode 
     */
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

    /**
     * sets the associated variable of the key that was pressed to false
     * on key up event
     * @param {string} keyCode 
     */
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

    /**
     * this function can be used to check whether a certain key is currently pressed
     * @param {string} key 
     * @returns boolean
     */
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