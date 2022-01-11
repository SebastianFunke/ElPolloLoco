class MovableObject extends DrawableObject {
    maxSpeed;
    collidingY;
    collidingX;
    collidingheight;
    collidingwidth;
    isHigher = false;
    jumpImgUpPosition = 0;
    jumpImgFallPosition = 0;
    jumpSmash = false;
    speed = 2;
    jumpHeight = -80;
    speedY = 0;
    speedX = 80;
    deadJumpHeight = -40;
    acceleration = 6;
    isJumping = false;
    ground = 850;
    endReached = false;
    energy;
    timePassed = 0;
    lastHit = 0;

    /**
     * function is called when object is generated
     */
    constructor() {
        super();
        this.energy = properties.characterEnergy;
    }

    /**
     * function to check if the object is colliding with another object
     * @param {object} mo - movable object 
     * @returns boolean
     */
    isColliding(mo) {
        return this.collidingX + this.collidingwidth > mo.collidingX &&
            this.collidingY + this.collidingheight > mo.collidingY &&
            this.collidingX < mo.collidingX &&
            this.collidingY < mo.collidingY + mo.collidingheight;
    }

    /**
     * function to check if the object is jumped on another object
     * @param {object} mo - movable object 
     * @returns boolean
     */
    isSmashed(mo) {
        return this.isHigher &&
            this.collidingX + this.collidingwidth > mo.collidingX &&
            this.collidingX < mo.collidingX + mo.collidingwidth &&
            this.collidingY + this.collidingheight > mo.y
    }

    /**
     * checks if the character is higher as the mo
     * @param {object} mo - movable object 
     */
    checkHigher(mo) {
        if (mo.y > this.y + this.height) {
            this.isHigher = true;
        } else {
            this.isHigher = false;
        }
    }

    /**
     * applies gravity when the character starts jumping
     * when the character smashed an enemy the character hop a little
     */
    applyGravity() {
        setInterval(() => {
            if (!this.isDead()) {
                if (keyboard.getPressedKey('space') && !this.isInAir()) {
                    sounds.playJumpUp();
                    this.jumpgImgPosition = 0;
                    this.speedY = this.jumpHeight;
                }
                if (this.isInAir() || this.speedY < 0) {
                    this.y += this.speedY;
                    this.speedY += this.acceleration;
                }
                if (this.jumpSmash) {
                    this.jumpgImgPosition = 0;
                    this.speedY = this.jumpHeight / 2;
                    this.jumpSmash = false;
                }
            }
        }, 1000 / 25);
    }

    /**
     * checks if the objects energy is under or equal zero
     * @returns boolean
     */
    isDead() {
        return this.energy < 1;
    }

    /**
     * checks if the object is in air
     * @returns boolean
     */
    isInAir() {
        return this.y < this.ground;
    }

    /**
     * checks whether an object has been hit. in the case of an instance of character,
     * the function characterHitted is called. otherwise bossHitted is called
     */
    hit() {
        if (this instanceof Character) {
            if (!this.isHitted()) {
                this.characterHitted();
            }
        } else {
            this.bossHitted();
        };
    }

    /**
     * function to wait specific milliseconds
     * @param {number} time in milliseconds
     * @returns 
     */
    delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    /**
     * sets the variable for end of game to true after a second
     */
    async setEndReached() {
        await this.delay(1000);
        this.endReached = true;
    }

    /**
     * when character is hitted this function calls a sounds function
     * and decrease characters energy
     */
    characterHitted() {
        sounds.playCharacterHurt();
        this.energy -= 15;
        this.setLastHit();
    }

    /**
     * when boss is hitted this function calls a sounds function
     * and decrease boss energy
     * if boss energy is under zero playing dead sounds
     */
    bossHitted() {
        this.energy -= 20;
        if (this.energy > 0) {
            sounds.playBossHit();
        } else if (!this.playedSound) {
            sounds.playBossDead();
            this.playedSound = true;
        }
    }

    /**
     * sets the time of the last hit to a variable
     */
    setLastHit() {
        this.lastHit = new Date().getTime();
        this.lastHit = this.lastHit / 1000;
    }

    /**
     * returns true if the last beat was less than a second ago.
     * as a result, only one second can suffer damage
     * @returns boolean
     */
    isHitted() {
        this.timePassed = (new Date().getTime() / 1000) - this.lastHit;
        return this.timePassed < 1;
    }

    /**
     * lets the object move to left
     * @param {number} speed 
     */
    moveLeft(speed) {
        this.x += speed;
    }

    /**
     * lets the object move to right
     * @param {number} speed 
     */
    moveRight(speed) {
        this.x -= speed;
    }

    /**
     * set the colling parameter of an object.
     * required if a picture is larger than the model within the picture
     */
    setCollidingParams() {
        setInterval(() => {
            if (this instanceof Character) {
                this.collidingheight = this.height / 1.7;
                this.collidingY = this.y + this.height / 2.6;
                this.collidingX = this.x;
                this.collidingwidth = this.width;
            } else if (this instanceof PickableCoin) {
                this.collidingheight = this.height / 3;
                this.collidingY = this.y + this.height / 3;
                this.collidingX = this.x + this.width / 3;
                this.collidingwidth = this.width / 3;
            } else {
                this.collidingheight = this.height;
                this.collidingY = this.y;
                this.collidingX = this.x;
                this.collidingwidth = this.width;
            }
        }, 1000 / 60);
    }

}