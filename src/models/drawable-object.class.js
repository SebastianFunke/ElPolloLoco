class DrawableObject {
    canvasWidth;
    imgPosition = 0;
    x;
    y;
    img;
    height;
    width;
    imageCache = [];
    imageArray = [];
    playedSound = false;

    /**
     * function to load a single image
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * function to load several pictures into an array
     * @param {array} arr - array with paths of the pictures
     * @returns array - with several pictures
     */
    loadImages(arr) {
        this.imageArray = [];
        arr.forEach(element => {
            let i = new Image();
            i.src = element;
            this.imageArray.push(i);
        });
        return this.imageArray
    }

    /**
     * get the x position of this object
     * @returns number
     */
    getLeft() {
        return this.x;
    }

    /**
     * get the y position of this object
     * @returns number
     */
    getTop() {
        return this.y;
    }

    /**
     * get the right end position of this object
     * @returns number
     */
    getRight() {
        return this.x + this.width;
    }

    /**
     * get the top position of this object
     * @returns number
     */
    getBottom() {
        return this.y + this.height;
    }

}