class Character extends MovableObject {
    isMoving = false;
    idleTimer = 30;
    idleTimerCount = 0;
    lookDirection = true;
    leftEnd = false;
    rightEnd = false;
    deadImgPosition = 0;
    coins = 75;
    bottles = 70;
    moveImages = [];
    idleImages = [];
    longIdleImages = [];
    jumpImagesUp = [];
    jumpImagesFall = [];
    hurtImages = [];
    deadImages = [];
    moveImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png"

    ];
    idleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png"
    ];
    longIdleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png",

    ];
    jumpImageUpCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-31.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-32.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-33.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-34.png"
    ];
    jumpImagesFallCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-35.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-36.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-37.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-38.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-39.png"
    ];
    hurtImagesCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png",

    ];
    deadImagesCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png",

    ];
    constructor(canvasWidth, speed) {
        super().loadImage("src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png")
        this.moveImages = this.loadImages(this.moveImgCache);
        this.idleImages = this.loadImages(this.idleImgCache);
        this.longIdleImages = this.loadImages(this.longIdleImgCache);
        this.jumpImagesUp = this.loadImages(this.jumpImageUpCache);
        this.jumpImagesFall = this.loadImages(this.jumpImagesFallCache);
        this.hurtImages = this.loadImages(this.hurtImagesCache);
        this.deadImages = this.loadImages(this.deadImagesCache);
        this.canvasWidth = canvasWidth;
        this.x = 320;
        this.y = 250;
        this.height = 700;
        this.width = 350;
        this.speed = speed;
        this.main();
        this.applyGravity();
    }

    main() {

        setInterval(() => {
            if (!this.isDead()) {
                if (this.isHitted()) {
                    this.displayHurt();
                } else if (this.isInAir() && this.speedY <= 0) {
                    this.displayJumpUp();
                } else if (this.isInAir() && this.speedY > 0) {
                    this.displayJumpFall();
                } else {

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
            } else {
                this.displayDead();
            }

            this.increaseImgPosition();
        }, 100);

        setInterval(() => {
            this.checkCharacterEndRight();
            this.checkCharacterEndLeft();
            this.checkKeyRight();
            this.checkKeyLeft();
            this.checkResetIdle();
        }, 1000 / 60);
    }


    displayIdle() {
        this.idleTimerCount++;
        if (this.idleTimerCount <= this.idleTimer) {
            this.img = this.idleImages[this.imgPosition % this.idleImages.length];
        } else {
            this.img = this.longIdleImages[this.imgPosition % this.longIdleImages.length];
        }
    }
    displayHurt() {
        this.img = this.hurtImages[this.imgPosition % this.hurtImages.length];

    }
    displayJumpUp() {
        this.img = this.jumpImagesUp[this.jumpImgUpPosition];
        if (this.jumpImgUpPosition < this.jumpImagesUp.length - 1) {
            this.jumpImgUpPosition++;
        } else {
            this.jumpImgFallPosition = 0;
        };
    }



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

    displayMove() {
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];
    }

    checkResetIdle() {
        if (keyboard.getPressedKey('right') || keyboard.getPressedKey('left')) {
            this.idleTimerCount = 0;

        }
    }

    displayDead() {

        setInterval(() => {
            this.img = this.deadImages[this.deadImgPosition];
            this.y += this.deadJumpHeight;
            this.deadJumpHeight += 2;
            if (this.deadImgPosition < this.deadImages.length - 1) { this.deadImgPosition++ };
        }, 1000 / 25);

    }

    increaseImgPosition() {
        this.imgPosition++;
    }



    checkBothDirectionKeysPressed() {
        if (keyboard.getPressedKey('right') && keyboard.getPressedKey('left')) {
            return true;
        } else {
            return false;
        }
    }

    checkKeyRight() {
        if (keyboard.getPressedKey('right') && !this.checkBothDirectionKeysPressed()) {
            if (!this.rightEnd) {
                this.x += this.speed;
                this.lookDirection = true;
            }
        }
    }

    checkKeyLeft() {
        if (keyboard.getPressedKey('left') && !this.checkBothDirectionKeysPressed()) {
            if (!this.leftEnd) {
                this.lookDirection = false;
                this.x -= this.speed;
            }
        }
    }
    checkCharacterEndRight() {
        if (this.x > this.canvasWidth / 3) {
            this.rightEnd = true;
        } else {
            this.rightEnd = false;
        }
    }

    checkCharacterEndLeft() {
        if (this.x < this.canvasWidth / 18) {
            this.leftEnd = true;
        } else {
            this.leftEnd = false;
        }
    }


}