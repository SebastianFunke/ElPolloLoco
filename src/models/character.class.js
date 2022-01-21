class Character extends MovableObject {
    isMoving = false;
    idleTimer = 30;
    idleTimerCount = 0;
    lookDirection = true;
    leftEnd = false;
    rightEnd = false;
    deadImgPosition = 0;
    coins = 0;
    bottles = 0;
    moveImages = [];
    idleImages = [];
    longIdleImages = [];
    jumpImagesUp = [];
    jumpImagesFall = [];
    hurtImages = [];
    deadImages = [];
    moveImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png"

    ];
    idleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png"
    ];
    longIdleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-11.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-12.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-13.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-14.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-15.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-16.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-17.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-18.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-19.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-20.png",

    ];
    jumpImageUpCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png"
    ];
    jumpImagesFallCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png"
    ];
    hurtImagesCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png",

    ];
    deadImagesCache = [
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png",
        "src/img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png",

    ];

    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     * @param {number} canvasWidth - the width of the canvas
     * @param {number} speed - the standard speed of this object
     */
    constructor() {
        super().loadImage("src/img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png")
        this.loadAllImages();
        this.canvasWidth = properties.width;
        this.x = 320;
        this.y = 250;
        this.height = 700;
        this.width = 350;
        this.speed = properties.maxSpeed;

    }

    startCharacter() {
            this.main();
            this.applyGravity();
            this.setCollidingParams();
        }
        /**
         * function to load all images into the arrays
         */
    loadAllImages() {
        this.moveImages = this.loadImages(this.moveImgCache);
        this.idleImages = this.loadImages(this.idleImgCache);
        this.longIdleImages = this.loadImages(this.longIdleImgCache);
        this.jumpImagesUp = this.loadImages(this.jumpImageUpCache);
        this.jumpImagesFall = this.loadImages(this.jumpImagesFallCache);
        this.hurtImages = this.loadImages(this.hurtImagesCache);
        this.deadImages = this.loadImages(this.deadImagesCache);
    }

    /**
     * function to decide which pictures should be drawn
     */
    main() {
        setInterval(() => {
            sounds.pause();
            if (!this.isDead()) {
                if (this.isHitted()) {
                    this.displayHurt();
                } else if (this.isInAir() && this.speedY <= 0) {
                    this.displayJumpUp();
                } else if (this.isInAir() && this.speedY > 0) {
                    this.hasSmashed = false;
                    this.displayJumpFall();
                } else {
                    this.checkBothKeys();
                }
            } else {
                this.displayDead();
            }
            this.increaseImgPosition();
        }, 100);
        this.checkFunctions();
    }

    /**
     * function to call several functions which will check several states
     */
    checkFunctions() {
        setInterval(() => {
            this.checkCharacterEndRight();
            this.checkCharacterEndLeft();
            this.checkKeyRight();
            this.checkKeyLeft();
            this.checkResetIdle();
        }, 1000 / 60);
    }

    /**
     * function to check if both keys are pressed
     * if true character images will be setted to idle
     */
    checkBothKeys() {
        if (keyboard.getPressedKey('right') || keyboard.getPressedKey('left')) {
            if (this.checkBothDirectionKeysPressed()) {
                this.displayIdle();
            } else {
                this.displayMove();
            }
        } else {
            this.displayIdle();
        }
    }

    /**
     * adds a coin when a coin is picked up
     */
    addCoin() {
        this.coins += 20;
    }

    /**
     * adds a bottle when a bottle is picked up
     */
    addBottle() {
        this.bottles += 10;
    }

    /**
     * function to set images when the object is idle and adds 1 to idle counter
     * when idleTimerCount is equal to idleTimer then object images will set to
     * sleep images
     */
    displayIdle() {
        this.idleTimerCount++;
        if (this.idleTimerCount <= this.idleTimer) {
            this.img = this.idleImages[this.imgPosition % this.idleImages.length];
        } else {
            sounds.playSleep();
            this.img = this.longIdleImages[this.imgPosition % this.longIdleImages.length];
        }
    }

    /**
     * function to set images when the object is hurt
     */
    displayHurt() {
        this.img = this.hurtImages[this.imgPosition % this.hurtImages.length];
        this.idleTimerCount = 0;
    }

    /**
     * function to set images when the object is jumping up
     */
    displayJumpUp() {
        this.img = this.jumpImagesUp[this.jumpImgUpPosition];
        if (this.jumpImgUpPosition < this.jumpImagesUp.length - 1) {
            this.jumpImgUpPosition++;
        } else {
            this.jumpImgFallPosition = 0;
        };
    }

    /**
     * function to set images when the object is falling down
     */
    displayJumpFall() {
        this.img = this.jumpImagesFall[this.jumpImgFallPosition];
        if (this.y > (this.ground + this.jumpHeight) / 2) {
            if (this.jumpImgFallPosition < this.jumpImagesFall.length - 1) {
                this.jumpImgFallPosition++;
            }
        } else {
            this.jumpImgUpPosition = 0;
        }
    }

    /**
     * function to set images when the object is walking
     */
    displayMove() {
        sounds.playWalking();
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];
    }

    /**
     * resets the idle counter when a key is pressed
     */
    checkResetIdle() {
        if (keyboard.getPressedKey('right') || keyboard.getPressedKey('left') || keyboard.getPressedKey('d') || keyboard.getPressedKey('space')) {
            this.idleTimerCount = 0;
        }
    }

    /**
     * function to set images when the objects energy is below zero
     * and lets the object jump a little and then fall out of the canvas
     */
    displayDead() {
        setInterval(() => {
            this.img = this.deadImages[this.deadImgPosition];
            this.y += this.deadJumpHeight;
            this.deadJumpHeight += 2;
            this.setEndReached();
            if (this.deadImgPosition < this.deadImages.length - 1) { this.deadImgPosition++ };
        }, 1000 / 25);
    }

    /**
     * increase the imgPosition with one
     */
    increaseImgPosition() {
        this.imgPosition++;
    }

    /**
     * check if left and right keys are pressed simultaneously
     * @returns true when both keys are pressed / false when they are not simultaneously pressed
     */
    checkBothDirectionKeysPressed() {
        if (keyboard.getPressedKey('right') && keyboard.getPressedKey('left')) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * when right key is pressed, object will move right until it reaches the right
     * border
     */
    checkKeyRight() {
        if (keyboard.getPressedKey('right') && !this.checkBothDirectionKeysPressed()) {
            if (!this.rightEnd) {
                this.x += this.speed;
                this.lookDirection = true;
            }
        }
    }

    /**
     * when left key is pressed, object will move left until it reaches the left
     * border
     */
    checkKeyLeft() {
        if (keyboard.getPressedKey('left') && !this.checkBothDirectionKeysPressed()) {
            if (!this.leftEnd) {
                this.lookDirection = false;
                this.x -= this.speed;
            }
        }
    }

    /**
     * checks whether the object has reached the right edge
     */
    checkCharacterEndRight() {
        if (this.x > this.canvasWidth) {
            this.rightEnd = true;
        } else {
            this.rightEnd = false;
        }
    }

    /**
     * checks whether the object has reached the left edge
     */
    checkCharacterEndLeft() {
        if (this.x < this.canvasWidth / 18) {
            this.leftEnd = true;
        } else {
            this.leftEnd = false;
        }
    }

}