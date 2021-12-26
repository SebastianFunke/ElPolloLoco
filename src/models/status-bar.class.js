class StatusBar extends DrawableObject {
    lifeBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/0.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/20.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/40.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/60.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/80.png",
        "src/img/7.Marcadores/Barra/Marcador vida/Naranja/100.png"
    ];

    bottleBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png",
        "src/img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png"

    ];

    coinBarImgsCache = [
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/0_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/20_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/40_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/60_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/80_.png",
        "src/img/7.Marcadores/Barra/Marcador moneda/azul/100_.png"
    ];

    bossBarLifeCache = [
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/0_.png",
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/20_.png",
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/40_.png",
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/60_.png",
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/80_.png",
        "src/img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/100_.png",
    ];

    barImgs = [];
    type;




    constructor(type) {
        super();
        this.height = properties.height / 3.5;
        this.width = properties.width / 1.5;
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
        } else if (type == 'boss') {
            this.barImgs = this.loadImages(this.bossBarLifeCache);
            this.y = 20;
            this.x = (properties.width * properties.scale) - this.width;
        }






    }



    setImg(actualLife, actualBottles, actualCoins, actualBossLife) {
        let typePercentage;
        if (this.type == 'life') {
            typePercentage = actualLife;
        } else if (this.type == 'bottle') {
            typePercentage = actualBottles;
        } else if (this.type == 'coin') {
            typePercentage = actualCoins;
        } else if (this.type == 'boss') {
            typePercentage = actualBossLife;
        }
        let imgPosition = Math.round((this.barImgs.length - 1) / 100 * typePercentage);
        if (imgPosition < 0) {
            imgPosition = 0
        };
        this.img = this.barImgs[imgPosition];
    }

}