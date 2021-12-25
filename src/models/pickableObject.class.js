class PickableObject extends DrawableObject {

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
    ]


    constructor() {
        super();
        this.coinImgs = this.loadImages(this.coinImgsCache);
        this.animate();
        this.x = 500;
        this.y = 500;
        this.height = 400;
        this.width = 400;
    }

    animate() {
        setInterval(() => {

            this.img = this.coinImgs[this.imgPosition % this.coinImgs.length];
            this.imgPosition++;

        }, 100);
    }

}