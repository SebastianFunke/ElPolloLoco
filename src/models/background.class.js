class Background extends MovableObject {

    constructor(imagePath, xMultiplier, y, multiplier) {
        super().loadImage(imagePath);
        this.multiplier = multiplier
        this.y = y;
        this.x = properties.width * xMultiplier * properties.scale;

    }

    moveBgRight(canvasWidth, speed) {
        this.x -= speed * this.multiplier;
        if (this.x < canvasWidth * -1) {
            this.x = canvasWidth - speed * this.multiplier;
        }
    }

    moveBgLeft(canvasWidth, speed) {
        this.x += speed * this.multiplier;
        if (this.x > canvasWidth) {
            this.x = 0 - canvasWidth + speed * this.multiplier;
        }
    }

}