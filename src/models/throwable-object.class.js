class ThrowableObject extends MovableObject {
    collided = false;
    bottleImgs = [];
    splashImgs = [];
    additionalSpeed = 0;
    imgPositionSplash = 0;
    bottleImgsCache = [
        "src/img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png",
        "src/img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png",
        "src/img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png",
        "src/img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png"

    ];

    splashImgsCache = [
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png",
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png",
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png",
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png",
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png",
        "src/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png",
    ];


    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     */
    constructor(positionX, positionY, direction) {
        super();
        this.bottleImgs = this.loadImages(this.bottleImgsCache);
        this.splashImgs = this.loadImages(this.splashImgsCache);
        this.x = positionX;
        this.y = positionY;
        this.height = 250;
        this.width = 250;
        this.speedY = 70;
        this.speedX = 45;
        this.img = this.bottleImgs[0];
        this.acceleration = 5;
        this.ground = 1300;
        if (!direction) {
            this.speedX *= -1;
        }
        this.main();
        this.throw();
        this.setCollidingParams();
    }


    /**
     * sets the current picture of the bottle.
     * During the flight the bottle rotates, if the bottle hits the boss
     * or the ground, the splash images are displayed
     */
    main() {
        setInterval(() => {
            if (!this.isInAir() || this.collided) {
                if (this.energy > 0 && !this.playedSound) {
                    sounds.pauseBottleSmash();
                    sounds.playBottleSmash();
                    this.playedSound = true;
                }
                this.img = this.splashImgs[this.imgPositionSplash];
                this.imgPositionSplash++;
                if (this.imgPositionSplash >= this.splashImgs.length) {
                    this.energy = 0;
                }
            } else {
                this.img = this.bottleImgs[this.imgPosition % this.bottleImgs.length];
                this.imgPosition++;
            }
        }, 1000 / 10);
    }

    /**
     * lets the bottle fly and fall
     */
    throw () {
        setInterval(() => {
            if (this.isInAir() && !this.collided) {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.speedY -= this.acceleration;
            } else {
                this.x += this.additionalSpeed;
            }
        }, 1000 / 60);
    }

    /**
     * set the collided variable to true
     */
    collides() {
        this.collided = true;
    }

    /**
     * check if the bottle has collided
     * @returns boolean
     */
    hasHitted() {
        return this.collided;
    }

    /**
     * sets the additional speed, in case the character is moving
     * @param {number} speed 
     */
    setAdditionalSpeed(speed) {
        this.additionalSpeed = speed;
    }
}