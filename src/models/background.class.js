class Background extends MovableObject {

    constructor(imagePath, x, y, speed) {
        super().loadImage(imagePath);
        this.speed = Math.round(speed);
        this.y = y;
        this.x = x;
    }

    moveBgLeft(canvasWidth) {
        this.x -= this.speed;
        if (this.x < canvasWidth * -1) {
            this.x = canvasWidth - this.speed;
        }
    }

    moveBgRight(canvasWidth) {
        this.x += this.speed;
        if (this.x > canvasWidth) {
            this.x = 0 - canvasWidth + this.speed;
        }
    }

}