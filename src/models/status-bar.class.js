class StatusBar extends DrawableObject {
    lifeBarImgs = [];
    lifeBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/0.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/20.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/40.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/60.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/80.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png",

    ];







    constructor(canvasWidth) {
        super().loadImage("src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png");
        this.lifeBarImgs = this.loadImages(this.lifeBarImgsCache);
        this.x = 20;
        this.y = 20;
        this.height = canvasWidth / 15;
        this.width = canvasWidth / 5;
    }



    setImg(actualLife) {
        if (actualLife > 99) {
            this.img = this.lifeBarImgs[5];
        } else if (actualLife <= 99 && actualLife > 70) {
            this.img = this.lifeBarImgs[4];
        } else if (actualLife <= 69 && actualLife > 50) {
            this.img = this.lifeBarImgs[3];
        } else if (actualLife <= 49 && actualLife > 30) {
            this.img = this.lifeBarImgs[2];
        } else if (actualLife <= 29 && actualLife > 10) {
            this.img = this.lifeBarImgs[1];
        } else if (actualLife <= 0) {
            this.img = this.lifeBarImgs[0];
        }
    }

}