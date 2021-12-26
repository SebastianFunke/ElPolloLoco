class World {

    character;
    enemies = [];
    clouds = [];
    endBoss;
    backgroundObjects = [];
    cloudObjects = [];
    statusBar = [];
    ctx;
    coins = [];
    canvas;
    maxSpeed = 8;
    speedBgLayerFour = this.maxSpeed / 4;
    bottles = [];
    bottleThrowed = false;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        canvas.width = properties.width * properties.scale;
        canvas.height = properties.height * properties.scale;
        canvas.style.width = properties.width + 'px';
        canvas.style.height = properties.height + 'px';
        this.setCharacter();
        this.setBackgroundObjects();
        this.setEnemies();
        this.setClouds();
        this.setEndBoss();
        this.setStatusBar();
        this.setCoins();
        this.setBottle();
        this.draw();
        this.checkBgMove();
        this.drawClouds();
        this.checkColissions();
        this.checkGenerateBottle();
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

    setCoins() {
        this.coins = level1.coins;
    }

    setEndBoss() {
        this.endBoss = new EndBoss();
    }

    setStatusBar() {
        this.statusBar.push(new StatusBar('life'));
        this.statusBar.push(new StatusBar('bottle'));
        this.statusBar.push(new StatusBar('coin'));
        this.statusBar.push(new StatusBar('boss'));

    }

    setBottle() {
            //this.bottles.push(new ThrowableObject);
            //this.bottles.push(new ThrowableObject);
            //this.bottles.push(new ThrowableObject);
        }
        //TODO draw function move to drawable object
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
        this.drawCoins();
        this.drawCharacter();
        this.drawStatusBars();
        this.drawBottle();


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

    drawCoins() {
        this.coins.forEach(coin => {
            this.ctx.drawImage(coin.img, coin.x, coin.y, coin.width, coin.height);
            //coin.drawBorder(this.ctx);
        });
        this.coins.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
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

            this.bottles.forEach((bottle) => {
                if (this.endBoss.isColliding(bottle)) {
                    if (!bottle.hasHitted()) {
                        this.endBoss.hit();
                    }
                    bottle.collides();
                };
            });

            this.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    coin.energy = 0;
                    this.character.addCoin();
                }
            })


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

        //this.character.drawBorder(this.ctx);

        if (!this.character.lookDirection) {
            this.character.x = this.character.x * -1;
            this.ctx.restore();
        }
    }

    drawEndBoss() {
        this.ctx.drawImage(this.endBoss.img, this.endBoss.x, this.endBoss.y, this.endBoss.width, this.endBoss.height);
        //this.endBoss.drawBorder(this.ctx);
    }

    drawStatusBars() {

        this.statusBar.forEach(element => {
            element.setImg(this.character.energy, this.character.bottles, this.character.coins, this.endBoss.energy);
            this.ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        });
    }

    drawBottle() {
        this.bottles.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
        this.bottles.forEach(element => {
            this.ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        });

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

                        this.coins.forEach(coin => {
                            coin.moveRight(this.maxSpeed);
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
                        this.coins.forEach(coin => {
                            coin.moveLeft(this.maxSpeed);
                        });
                    }

                }
            }
        }, 1000 / 60);

    }

    checkGenerateBottle() {
        setInterval(() => {
            if (this.character.bottles > 0) {
                if (keyboard.getPressedKey('d') && !this.bottleThrowed) {
                    this.bottles.push(new ThrowableObject(this.character.x + (this.character.width / 6), this.character.y + (this.character.height / 3), this.character.lookDirection));
                    this.character.bottles -= 10;
                    this.bottleThrowed = true;
                }
                if (!keyboard.getPressedKey('d') && this.bottleThrowed) {
                    this.bottleThrowed = false;
                }
            }
        }, 1000 / 60);
    }


}