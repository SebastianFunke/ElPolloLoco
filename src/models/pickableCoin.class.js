class PickableCoin extends MovableObject {

    coinImgs = [];
    coinImgsCache = [
        "src/img/8.Coin/0.png",
        "src/img/8.Coin/1.png",
        "src/img/8.Coin/2.png",
        "src/img/8.Coin/3.png",
        "src/img/8.Coin/4.png",
        "src/img/8.Coin/5.png",
        "src/img/8.Coin/6.png",
        "src/img/8.Coin/7.png",
    ];

    /**
     * function is called when object is generated
     * this function sets the main abilities and images and starts 
     * other different functions 
     */
    constructor() {
        super();
        this.coinImgs = this.loadImages(this.coinImgsCache);
        this.animate();
        this.x = properties.width * Math.random() * 6 + 650;
        this.y = properties.height * Math.random() + properties.height;
        this.height = 400;
        this.width = 400;
        this.setCollidingParams();
    }

    /**
     * animates the oppenent with move images
     */
    animate() {
        setInterval(() => {
            this.img = this.coinImgs[this.imgPosition % this.coinImgs.length];
            this.imgPosition++;
        }, 100);
    }

}