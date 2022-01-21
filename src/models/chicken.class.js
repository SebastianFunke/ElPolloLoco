class Chicken extends MovableObject {
    additionalSpeed = 0;
    moveImages = [];
    dyingImgs = [];
    imgCache = [
        "src/img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/1.png",
        "src/img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/2.png",
        "src/img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/3.png"
    ];

    imgCacheAlternative = [
        "src/img/3.Secuencias_Enemy_basico/Version_pollito/1.png",
        "src/img/3.Secuencias_Enemy_basico/Version_pollito/2.png",
        "src/img/3.Secuencias_Enemy_basico/Version_pollito/3.png",
    ];
    dyingImgsCache = ["src/img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/4.png"];
    dyingImgsCacheAlternative = ["src/img/3.Secuencias_Enemy_basico/Version_pollito/4Muerte.png"];

    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     */
    constructor() {
        super().loadImage("src/img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/1.png")
        this.canvasWidth = properties.width * properties.scale;
        this.randomizeImg();
        this.speed = 2 + (3 * Math.random());
        this.x = this.canvasWidth * 2.2 * Math.random() + this.canvasWidth;
        this.y = 1350;
        this.height = 200;
        this.width = 200;
        this.setCollidingParams();

    }

    /**
     * function to start enemie
     */
    startEnemie() {
        this.move();
        this.animate();
    }

    /**
     * function to give the opponent a random appearance
     */
    randomizeImg() {
        if (Math.floor(Math.random() * 2)) {
            this.moveImages = this.loadImages(this.imgCache);
            this.dyingImgs = this.loadImages(this.dyingImgsCache);
        } else {
            this.moveImages = this.loadImages(this.imgCacheAlternative);
            this.dyingImgs = this.loadImages(this.dyingImgsCacheAlternative);
        }
    }

    /**
     * lets the oppenent move while he is alive
     * if oppenent is dead speed is set to zero, so it don not move anymore
     * if oppenent is out of left screen it will be resurrected at a random position
     */
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
                this.resurrect();
            }
        }, 1000 / 60);
    }

    /**
     * resurrect the enemy and set its position randomly
     */
    resurrect() {
        this.x = this.canvasWidth * Math.random() + this.canvasWidth;
        this.energy = 100;
        this.randomizeImg();
    }

    /**
     * animates the oppenent with move images
     */
    animate() {
        setInterval(() => {
            if (this.isAlive()) {
                this.img = this.moveImages[this.imgPosition % this.moveImages.length];
                this.imgPosition++;
            }
        }, 100);
    }

    /**
     * checks if the oppenents energy is over zero
     * @returns boolean - energy over zero
     */
    isAlive() {
        return this.energy > 0;
    }

    /**
     * if the background moves, the opponent is given additional speed or 
     * subtracted. depending on which direction the background is moving
     * @param {number} input - additional speed
     */
    setAdditionalSpeed(input) {
        this.additionalSpeed = input;
    }

    /**
     * set the image to dead images
     */
    setDeadImgs() {
        sounds.playEnemySmash();
        this.img = this.dyingImgs[0];
    }

}