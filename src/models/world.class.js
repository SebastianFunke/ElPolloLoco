class World {

    character;
    enemies = [];
    clouds = [];
    endBoss;
    backgroundObjects = [];
    cloudObjects = [];
    ctx;
    canvas;
    maxSpeed = 8;
    speedBgLayerFour = this.maxSpeed / 4;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        canvas.width = properties.width * properties.scale;
        canvas.height = properties.height * properties.scale;
        this.setCharacter();
        this.setBackgroundObjects();
        this.setEnemies();
        this.setClouds();
        this.setEndBoss();
        this.draw();
        this.checkBgMove();
        this.drawClouds();
        this.checkColissions();
    }


    setCharacter() {
        this.character = new Character(this.canvas.width, this.maxSpeed);
    }
    setBackgroundObjects() {
        this.backgroundObjects = level1.backgroundObjects;
    }

    setClouds() {
        this.cloudObjects = level1.clouds;
    }

    setEnemies() {
        this.enemies = level1.enemies;
    }

    setEndBoss() {
        this.endBoss = new EndBoss();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.backgroundObjects.forEach(backgroundObject => {
            this.ctx.drawImage(backgroundObject.img, backgroundObject.x, 0, this.canvas.width, this.canvas.height);
        });

        this.cloudObjects.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, 0, this.canvas.width, this.canvas.height);
        });

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
            enemy.drawBorder(this.ctx);
        });

        this.drawEndBoss();
        this.drawCharacter();




        let self = this;
        requestAnimationFrame(function() {
            self.draw();

        });
    }






    drawClouds() {
        setInterval(() => {
            this.cloudObjects.forEach(cloud => {
                cloud.moveCloudLeft(this.canvas.width, this.speedBgLayerFour);
            });
        }, 1000 / 60);
    }

    getHeight() {
        return this.canvas.height;
    }

    getWidth() {
        return this.canvas.width;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    checkColissions() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();

                };
            });



        }, 100);
    }

    drawCharacter() {

        if (!this.character.lookDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;

        }
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.character.drawBorder(this.ctx);

        if (!this.character.lookDirection) {
            this.character.x = this.character.x * -1;
            this.ctx.restore();
        }
    }

    drawEndBoss() {
        this.ctx.drawImage(this.endBoss.img, this.endBoss.x, this.endBoss.y, this.endBoss.width, this.endBoss.height);
        this.endBoss.drawBorder(this.ctx);
    }
    checkBgMove() {
        setInterval(() => {


            this.enemies.forEach(enemy => {
                enemy.setAdditionalSpeed(0);
            });



            if (!this.character.isDead()) {
                if (!this.character.checkBothDirectionKeysPressed()) {
                    if (this.character.rightEnd && keyboard.getPressedKey('right')) {
                        this.endBoss.moveLeft();


                        this.enemies.forEach(enemy => {
                            enemy.setAdditionalSpeed(this.maxSpeed);
                        });
                        this.backgroundObjects.forEach(object => {
                            object.moveBgLeft(this.canvas.width, this.maxSpeed);
                        });
                    }
                    if (this.character.leftEnd && keyboard.getPressedKey('left')) {
                        this.endBoss.moveRight();
                        this.enemies.forEach(enemy => {
                            enemy.setAdditionalSpeed(this.maxSpeed * -1);
                        });
                        this.backgroundObjects.forEach(object => {
                            object.moveBgRight(this.canvas.width, this.maxSpeed);
                        });
                    }

                }
            }
        }, 1000 / 60);

    }


}