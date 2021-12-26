class ThrowableObject extends MovableObject {
    collided = false;
    bottleImgs = [];
    splashImgs = [];
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



    constructor(positionX, positionY, direction) {
        super();
        this.bottleImgs = this.loadImages(this.bottleImgsCache);
        this.splashImgs = this.loadImages(this.splashImgsCache);
        this.x = positionX;
        this.y = positionY;
        this.height = 250;
        this.width = 250;
        this.speedY = 80;
        this.img = this.bottleImgs[0];
        this.acceleration = 12;
        this.ground = 1300;
        if (!direction) {
            this.speedX *= -1;
        }
        this.rotate();
        this.throw();
        this.setCollidingParams();
    }



    rotate() {
        setInterval(() => {
            if (!this.isInAir() || this.collided) {
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

    throw () {
        setInterval(() => {
            if (this.isInAir() && !this.collided) {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 20);
    }

    collides() {
        this.collided = true;
    }

    hasHitted() {
        return this.collided;
    }
}