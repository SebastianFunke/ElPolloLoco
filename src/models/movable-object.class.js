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

    isSmashed(mo) {
        return this.isHigher &&
            this.collidingX + this.collidingwidth > mo.collidingX &&
            this.collidingX < mo.collidingX + mo.collidingwidth &&
            this.collidingY + this.collidingheight > mo.y
    }

    checkHigher(mo) {
        if (mo.y > this.y + this.height) {
            this.isHigher = true;
        } else {
            this.isHigher = false;
        }
    }


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
    isDead() {
        return this.energy < 1;
    }

    isInAir() {
        return this.y < this.ground;
    }

    hit() {
        if (this instanceof Character) {
            if (!this.isHitted()) {
                sounds.playCharacterHurt();
                this.energy -= 15;
                this.setLastHit();
            }
        } else {
            this.energy -= 20;
            if (this.energy > 0) {
                sounds.playBossHit();
            } else if (!this.playedSound) {
                sounds.playBossDead();
                this.playedSound = true;
            }
        };
    }

    setLastHit() {
        this.lastHit = new Date().getTime();
        this.lastHit = this.lastHit / 1000;
    }

    isHitted() {
        this.timePassed = (new Date().getTime() / 1000) - this.lastHit;
        return this.timePassed < 1;
    }

    moveLeft(speed) {
        this.x += speed;
    }

    moveRight(speed) {
        this.x -= speed;
    }

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