class World {

    character;
    enemies = [];
    clouds = [];
    backgroundObjects = [];
    ctx;
    canvas;
    maxSpeed = 8;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        var scale = 3;
        canvas.width = 720 * scale;
        canvas.height = 576 * scale;
        this.setCharacter();
        this.setBackgroundObjects();
        this.setEnemies();
        this.draw();
        this.checkBgMove();


    }


    setCharacter() {
        this.character = new Character(this.canvas.width, this.maxSpeed);
    }
    setBackgroundObjects() {
        this.backgroundObjects = [
            new Background('src/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0, 0),
            new Background('src/img/5.Fondo/Capas/4.nubes/1.png', 0, 0, this.maxSpeed / 4),
            new Background('src/img/5.Fondo/Capas/4.nubes/2.png', this.canvas.width, 0, this.maxSpeed / 4),
            new Background('src/img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0, this.maxSpeed / 3),
            new Background('src/img/5.Fondo/Capas/3.Fondo3/2.png', this.canvas.width, 0, this.maxSpeed / 3),
            new Background('src/img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0, this.maxSpeed / 2),
            new Background('src/img/5.Fondo/Capas/2.Fondo2/2.png', this.canvas.width, 0, this.maxSpeed / 2),
            new Background('src/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0, this.maxSpeed),
            new Background('src/img/5.Fondo/Capas/1.suelo-fondo1/2.png', this.canvas.width, 0, this.maxSpeed)
        ];


    }

    setEnemies() {
        this.enemies = [
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),
            new Chicken(this.canvas.width, this.maxSpeed),

        ]
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.backgroundObjects.forEach(backgroundObject => {
            this.ctx.drawImage(backgroundObject.img, backgroundObject.x, 0, this.canvas.width, this.canvas.height);
        });
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });


        this.drawCharacter();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();

        });
    }


    drawCharacter() {

        if (!this.character.lookDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;

        }
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        if (!this.character.lookDirection) {
            this.character.x = this.character.x * -1;
            this.ctx.restore();
        }



    }

    checkBgMove() {
        setInterval(() => {


            this.enemies.forEach(enemy => {
                enemy.setAdditionalSpeed(0);
            });




            if (this.character.rightEnd && keyboard.getPressedKey('right')) {
                this.enemies.forEach(enemy => {
                    enemy.setAdditionalSpeed(this.maxSpeed);
                });
                this.backgroundObjects.forEach(object => {
                    object.moveBgLeft(this.canvas.width);
                });


            }
            if (this.character.leftEnd && keyboard.getPressedKey('left')) {
                this.enemies.forEach(enemy => {
                    enemy.setAdditionalSpeed(this.maxSpeed * -1);
                });
                this.backgroundObjects.forEach(object => {
                    object.moveBgRight(this.canvas.width);
                });
            }
        }, 1000 / 60);

    }


}