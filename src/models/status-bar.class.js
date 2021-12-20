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







    constructor() {
        super().loadImage("src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png");
        this.lifeBarImgs = this.loadImages(this.lifeBarImgsCache);
        this.x = 20;
        this.y = 20;
        this.height = properties.width / 7;
        this.width = properties.width / 2;
    }



    setLifeImg(actualLife) {
        let imgPosition = Math.round((this.lifeBarImgs.length - 1) / 100 * actualLife)
        if (imgPosition < 0) {
            imgPosition = 0
        };
        this.img = this.lifeBarImgs[imgPosition];
    }

}