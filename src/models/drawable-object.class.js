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
        ctx.rect(this.collidingX, this.collidingY, this.collidingwidth, this.collidingheight);
        ctx.stroke();

    }








}