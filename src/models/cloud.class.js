class Cloud extends MovableObject {

    constructor(imagePath, xMultiplier, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = xMultiplier * properties.width * properties.scale;

    }

    moveCloudLeft(canvasWidth, speed) {
        this.x -= speed / 4;
        if (this.x < canvasWidth * -1) {
            this.x = canvasWidth - speed / 4;
        }

    }


}