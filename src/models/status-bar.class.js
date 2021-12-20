class StatusBar extends DrawableObject {
    lifeBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/0.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/20.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/40.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/60.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/80.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png",
    ];

    bottleBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png",

    ];

    coinBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/0_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/20_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/40_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/60_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/80_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/100_.png",
    ];

    barImgs = [];
    type;




    constructor(type) {
        super();
        this.x = 20;
        this.type = type;
        if (type == 'life') {
            this.barImgs = this.loadImages(this.lifeBarImgsCache);
            this.y = 20;
        } else if (type == 'bottle') {
            this.barImgs = this.loadImages(this.bottleBarImgsCache);
            this.y = 20 + properties.height / 3.5;
        } else if (type == 'coin') {
            this.barImgs = this.loadImages(this.coinBarImgsCache);
            this.y = 20 + (properties.height / 1.75);
        }




        //.loadImage("src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png");
        //this.barImgs = this.loadImages(this.barImgsCache);

        //this.y = 20;
        this.height = properties.height / 3.5;
        this.width = properties.width / 1.5;
    }



    setImg(actualLife, actualBottles, actualCoins) {
        let typePercentage;
        if (this.type == 'life') {
            typePercentage = actualLife;
        } else if (this.type == 'bottle') {
            typePercentage = actualBottles;
        } else if (this.type == 'coin') {
            typePercentage = actualCoins;
        }
        let imgPosition = Math.round((this.barImgs.length - 1) / 100 * typePercentage)
        if (imgPosition < 0) {
            imgPosition = 0
        };
        this.img = this.barImgs[imgPosition];
    }

}