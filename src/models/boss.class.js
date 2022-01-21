class EndBoss extends MovableObject {
    deadImgPosition = 0;
    idleImages = [];
    idleImagesCache = [];
    dyingImages = [];
    alertImages = [];
    moveImages = [];
    hurtImages = [];
    moveImagesCache = [
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/1.Caminata/G1.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/1.Caminata/G2.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/1.Caminata/G3.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/1.Caminata/G4.png"
    ];
    alertImagesCache = [
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G13.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G14.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G15.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G16.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G17.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G18.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G19.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G20.png"
    ];
    dyingImagesCache = [
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G24.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G25.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G26.png",
    ];

    hurtImagesCache = [
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G21.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G22.png",
        "src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G23.png",
    ];

    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     */
    constructor() {
        super().loadImage("src/img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/1.Caminata/G1.png")
        this.moveImages = this.loadImages(this.moveImagesCache);
        this.alertImages = this.loadImages(this.alertImagesCache);
        this.dyingImages = this.loadImages(this.dyingImagesCache);
        this.hurtImages = this.loadImages(this.hurtImagesCache);
        this.x = properties.width * 6 + 850 + 5000;
        this.y = 700;
        this.height = 900;
        this.width = 900;
        this.speed = properties.maxSpeed / 5;
        this.energy = 50;
    }

    startBoss() {
        this.main();
        this.setCollidingParams();
    }

    /**
     * function to decide which pictures should be drawn
     */
    main() {
        setInterval(() => {
            if (!this.isDead()) {
                if (this.isHitted()) {
                    this.displayHurt();
                } else {
                    this.displayIdle();
                }
            } else {
                this.displayDead();
            }
            this.imgPosition++;
        }, 100);
    }

    /**
     * function to set images when the object is moving
     */
    displayMove() {
        this.x -= this.speed;
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];
    }

    /**
     * function to set images when the object is idle
     */
    displayIdle() {
        this.img = this.alertImages[this.imgPosition % this.alertImages.length];
    }

    /**
     * function to set images when the object is hurt
     */
    displayHurt() {
        this.img = this.hurtImages[this.imgPosition % this.hurtImages.length];
    }

    /**
     * function to set images when the object is dead
     */
    displayDead() {
        this.img = this.dyingImages[this.deadImgPosition];
        if (this.deadImgPosition < this.dyingImages.length - 1) {
            this.deadImgPosition++;
        } else {
            this.setEndReached();
        }
    }

    /**
     * if called object will move to left
     */
    moveLeft() {
        this.x -= properties.maxSpeed
    }

    /**
     * if called object will move right
     */
    moveRight() {
        this.x += properties.maxSpeed
    }

}