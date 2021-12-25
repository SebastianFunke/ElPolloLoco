class MovableObject extends DrawableObject {
    maxSpeed;


    jumpImgUpPosition = 0;
    jumpImgFallPosition = 0;

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


    constructor() {
        super();
        this.energy = properties.characterEnergy;

    }


    applyGravity() {
        setInterval(() => {
            if (!this.isDead()) {
                if (keyboard.getPressedKey('space') && !this.isInAir()) {
                    this.jumpgImgPosition = 0;
                    this.speedY = this.jumpHeight;

                }

                if (this.isInAir() || this.speedY < 0) {
                    this.y += this.speedY;
                    this.speedY += this.acceleration;
                }


                if (!this.isInAir() && this.isJumping) {
                    this.y = this.ground;

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
        console.log(this.energy);
        if (this instanceof Character) {
            if (!this.isHitted()) {

                this.energy -= 10;
                this.setLastHit();
            }

        } else {
            this.energy -= 10;
            this.setLastHit();

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





    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }





}