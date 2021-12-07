class MovableObject {
    maxSpeed;
    canvasWidth;
    imgPosition = 0;
    x;
    y;
    img;
    height;
    width;
    imageCache = [];
    imageArray = [];
    speed = 2;

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






}