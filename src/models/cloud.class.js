class Cloud extends MovableObject {

    constructor() {
        super().loadImage("./src/img/3. Background/Barrier/3.png");

        this.x = 900;
        this.y = 40 + 100 * Math.random();


    }

    randomizeHeight() {
        this.y = 40 + 100 * Math.random();
    }

}