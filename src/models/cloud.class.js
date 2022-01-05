class Cloud extends MovableObject {

    /**
     * function is called when object is generated
     * this function sets the main abilities and images
     * 
     * @param {string} imagePath - the path to the image
     * @param {number} xMultiplier - multiplier of speed
     * @param {number} y - startposition 
     */
    constructor(imagePath, xMultiplier, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = xMultiplier * properties.width * properties.scale;
    }

    /**
     * function to move clouds
     * @param {number} canvasWidth - width of the canvas
     * @param {number} speed - speed from the clouds
     */
    moveCloudLeft(canvasWidth, speed) {
        this.x -= speed / 4;
        if (this.x < canvasWidth * -1) {
            this.x = canvasWidth - speed / 4;
        }
    }

}