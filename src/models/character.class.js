class Character extends MovableObject {
    idleTimer = 30;
    idleTimerCount = 0;
    lookDirection = true;
    leftEnd = false;
    rightEnd = false;
    moveImages = [];
    idleImages = [];
    longIdleImages = [];
    moveImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png"

    ];
    idleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png"
    ];
    longIdleImgCache = [
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png",
        "src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png",

    ];
    constructor(canvasWidth, speed) {
        super().loadImage("src/img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png")
        this.moveImages = this.loadImages(this.moveImgCache);
        this.idleImages = this.loadImages(this.idleImgCache);
        this.longIdleImages = this.loadImages(this.longIdleImgCache);
        this.canvasWidth = canvasWidth;
        this.x = 320;
        this.y = 850;
        this.height = 700;
        this.width = 350;
        this.speed = speed;
        this.main();
        console.log(this.idleImages);
        console.log(this.img);
    }

    jump() {




    }



    main() {

        setInterval(() => {
            if (keyboard.getPressedKey('right') || keyboard.getPressedKey('left')) {
                this.img = this.moveImages[this.imgPosition % this.moveImages.length];
                this.idleTimerCount = 0;
            } else {
                this.idleTimerCount++;
                if (this.idleTimerCount <= this.idleTimer) {
                    this.img = this.idleImages[this.imgPosition % this.idleImages.length];
                } else {
                    this.img = this.longIdleImages[this.imgPosition % this.longIdleImages.length];
                }
            }
            this.imgPosition++;
        }, 100);

        setInterval(() => {
            this.checkCharacterEnd();
            this.checkDirectionKeys();
        }, 1000 / 60);
    }

    displayIdle() {

    }

    checkDirectionKeys() {
        if (keyboard.getPressedKey('left')) {
            if (!this.leftEnd) {
                this.lookDirection = false;
                this.x -= this.speed;
            }
        }

        if (keyboard.getPressedKey('right')) {
            if (!this.rightEnd) {
                this.x += this.speed;
                this.lookDirection = true;
            }
        }

    }


    checkCharacterEnd() {
        if (this.x > this.canvasWidth / 2) {
            this.rightEnd = true;
        } else {
            this.rightEnd = false;
        }

        if (this.x < this.canvasWidth / 18) {
            this.leftEnd = true;
        } else {
            this.leftEnd = false;
        }
    }


}