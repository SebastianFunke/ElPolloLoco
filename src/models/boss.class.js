class EndBoss extends MovableObject {
    idleImages = [];
    idleImagesCache = [

    ];
    alertImages = [];
    moveImages = [];
    moveImagesCache = [
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png"

    ];
    alertImagesCache = [
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png",
        "src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png"
    ];
    constructor() {
        super().loadImage("src/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png")
        this.moveImages = this.loadImages(this.moveImagesCache);
        this.alertImages = this.loadImages(this.alertImagesCache);
        this.x = 2950;
        this.y = 700;
        this.height = 900;
        this.width = 900;
        this.speed = properties.maxSpeed / 5;
        this.main();

    }


    main() {
        setInterval(() => {
            this.displayIdle();
            this.imgPosition++;
        }, 100);

    }

    displayMove() {
        this.x -= this.speed;
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];

    }

    displayIdle() {
        this.img = this.alertImages[this.imgPosition % this.alertImages.length];

    }


    moveLeft() {
        this.x -= properties.maxSpeed
    }

    moveRight() {
        this.x += properties.maxSpeed
    }




}