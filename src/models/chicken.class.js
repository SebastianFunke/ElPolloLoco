class Chicken extends MovableObject {
    additionalSpeed = 0;
    moveImages = [];
    imgCache = [
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2.png",
        "src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.png"
    ];


    constructor(canvasWidth, maxSpeed) {
        super().loadImage("src/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png")
        this.canvasWidth = canvasWidth;
        this.moveImages = this.loadImages(this.imgCache);
        this.speed = 2 + (3 * Math.random());
        this.x = this.canvasWidth * Math.random() + this.canvasWidth;
        this.y = 1350;
        this.height = 200;
        this.width = 200;
        this.move();
        this.animate();
        this.maxSpeed = maxSpeed;
    }


    move() {
        setInterval(() => {
            this.x -= this.speed + this.additionalSpeed;
            if (this.x < 0 - this.width) {
                this.x = this.canvasWidth * Math.random() + this.canvasWidth;;
            }
        }, 1000 / 60);

    }

    animate() {
        setInterval(() => {

            this.img = this.moveImages[this.imgPosition % this.moveImages.length];
            this.imgPosition++;

        }, 100);
    }

    setAdditionalSpeed(input) {
        this.additionalSpeed = input;
    }
}