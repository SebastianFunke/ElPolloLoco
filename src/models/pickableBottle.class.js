class PickableBottle extends MovableObject {

    bottleImgs = [];
    bottleImgsCache = [
        "src/img/6.botella/1.png",
        "src/img/6.botella/2.png"
    ]

    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     */
    constructor() {
        super();
        this.bottleImgs = this.loadImages(this.bottleImgsCache);
        this.x = properties.width * Math.random() * 2 * properties.scale + 650;
        this.y = properties.height / 5 * 4 * properties.scale;
        this.height = 200;
        this.width = 200;
        this.setRandomBottleImg();
        this.setCollidingParams();
    }

    /**
     * function to give the opponent a random appearance
     */
    setRandomBottleImg() {
        this.img = this.bottleImgs[Math.floor(Math.random() * 2)];
    }

}