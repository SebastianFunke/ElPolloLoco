class MovableObject {
    maxSpeed;
    canvasWidth;
    imgPosition = 0;
    jumpImgUpPosition = 0;
    jumpImgFallPosition = 0;
    x;
    y;
    img;
    height;
    width;
    imageCache = [];
    imageArray = [];
    speed = 2;
    jumpHeight = -80;
    speedY = 0;
    acceleration = 6;
    isJumping = false;
    ground = 850;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }



    loadImages(arr) {
        this.imageArray = [];
        arr.forEach(element => {
            let i = new Image();
            i.src = element;
            this.imageArray.push(i);
        });
        return this.imageArray


    }


    applyGravity() {
        setInterval(() => {
            if (keyboard.getPressedKey('space') && !this.isInAir()) {
                this.jumpgImgPosition = 0;
                this.speedY = this.jumpHeight;

            }

            if (this.isInAir() || this.speedY < 0) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }


            if (!this.isInAir() && this.isJumping) {
                this.y = this.ground;

            }

        }, 1000 / 25);
    }

    isInAir() {
        return this.y < this.ground;
    }

    getLeft() {


        return this.x;
    }

    getTop() {


        return this.y;
    }

    getRight() {


        return this.x + this.width;
    }

    getBottom() {


        return this.y + this.height;
    }


    drawBorder(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

}