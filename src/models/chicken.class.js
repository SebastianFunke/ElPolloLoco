class Chicken extends MovableObject {
    additionalSpeed = 0;
    moveImages = [];
    dyingImgs = [];
    imgCache = [
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.png"
    ];

    imgCacheAlternative = [
        "src/img/3.Secuencias_Enemy_básico/Versión_pollito/1.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_pollito/2.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_pollito/3.png",
    ];
    dyingImgsCache = ["src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.png"];
    dyingImgsCacheAlternative = ["src/img/3.Secuencias_Enemy_básico/Versión_pollito/4.muerte.png"];

    constructor() {
        super().loadImage("src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png")
        this.canvasWidth = properties.width * properties.scale;
        this.randomizeImg();
        this.speed = 2 + (3 * Math.random());
        this.x = this.canvasWidth * 2.2 * Math.random() + this.canvasWidth;
        this.y = 1350;
        this.height = 200;
        this.width = 200;
        this.move();
        this.animate();
        this.setCollidingParams();
    }

    randomizeImg() {
        if (Math.floor(Math.random() * 2)) {
            this.moveImages = this.loadImages(this.imgCache);
            this.dyingImgs = this.loadImages(this.dyingImgsCache);
        } else {
            this.moveImages = this.loadImages(this.imgCacheAlternative);
            this.dyingImgs = this.loadImages(this.dyingImgsCacheAlternative);
        }
    }

    move() {
        setInterval(() => {
            let speed;
            if (this.isAlive()) {
                speed = this.speed;
            } else {
                speed = 0;
            }
            speed += this.additionalSpeed;
            this.x -= speed;
            if (this.x < 0 - this.width) {
                this.x = this.canvasWidth * Math.random() + this.canvasWidth;
                this.energy = 100;
                this.randomizeImg();

            }
        }, 1000 / 60);

    }

    animate() {
        setInterval(() => {
            if (this.isAlive()) {
                this.img = this.moveImages[this.imgPosition % this.moveImages.length];
                this.imgPosition++;
            }
        }, 100);
    }

    isAlive() {
        return this.energy > 0;
    }
    setAdditionalSpeed(input) {
        this.additionalSpeed = input;
    }

    setDeadImgs() {
        sounds.playEnemySmash();
        this.img = this.dyingImgs[0];
    }

}