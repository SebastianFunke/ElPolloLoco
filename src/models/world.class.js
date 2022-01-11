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
    pickableBottles = [];
    gameActive = true;

    /**
     * function is called when object is generated
     * this function sets the main abilities
     * @param {ctx} canvas 
     */
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        canvas.width = properties.width * properties.scale;
        canvas.height = properties.height * properties.scale;
        canvas.style.width = properties.width + 'px';
        canvas.style.height = properties.height + 'px';
        this.setInfoText();
        this.setCharacter();
        this.setBackgroundObjects();
        this.setEnemies();
        this.setClouds();
        this.setEndBoss();
        this.setStatusBar();
        this.setCoins();
        this.setBottles();
        this.main();
        this.checkBgMove();
    }

    /**
     * sets the width of the infoText-div
     */
    setInfoText() {
        document.getElementById('infoText').style.width = properties.width + 'px';
    }

    /**
     * generate a new character object
     */
    setCharacter() {
        this.character = new Character(this.canvas.width, this.maxSpeed);
    }

    /**
     * generate new background objects, as many in level 1 class are defined
     */
    setBackgroundObjects() {
            this.backgroundObjects = level1.backgroundObjects;
        }
        /**
         * generate new cloud objects, as many in level 1 class are defined
         */
    setClouds() {
        this.cloudObjects = level1.clouds;
    }

    /**
     * generate new enemy objects, as many in level 1 class are defined
     */
    setEnemies() {
        this.enemies = level1.enemies;
    }

    /**
     * generate new coin objects, as many in level 1 class are defined
     */
    setCoins() {
        this.coins = level1.coins;
    }

    /**
     * generate a new boss object
     */
    setEndBoss() {
        this.endBoss = new EndBoss();
    }

    /**
     * generate new statusbar objects, three for character and one for boss
     */
    setStatusBar() {
        this.statusBar.push(new StatusBar('life'));
        this.statusBar.push(new StatusBar('bottle'));
        this.statusBar.push(new StatusBar('coin'));
        this.statusBar.push(new StatusBar('boss'));
    }

    /**
     * generate new pickable bottle objects, as many in level 1 class are defined
     */
    setBottles() {
        this.pickableBottles = level1.bottles;
    }

    /**
     * main function
     * clear the canvas and call several functions
     */
    main() {
        if (this.checkCharacterDead() && this.checkBossDead()) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawObjects();
            this.checkColissions();
            this.checkGenerateBottle();
            console.log(this.endBoss.endReached);
            let self = this;
            requestAnimationFrame(function() {
                self.main();
            });
        } else if (!this.checkCharacterDead()) {
            this.showLostScreen();
        } else if (!this.checkBossDead()) {
            this.showWinScreen();
        }
    }

    /**
     * hides gamecanvas and show win screen
     */
    showWinScreen() {
        document.body.style.background = "url('src/img/5.Fondo/1.png')";
        document.getElementById('canvasSection').classList.add('d-none');
        document.getElementById('endScreenWin').classList.remove('d-none');
    }

    /**
     * hide gamecanvas and show lost screen
     */
    showLostScreen() {
        document.body.style.background = "url('src/img/5.Fondo/1.png')";
        document.getElementById('canvasSection').classList.add('d-none');
        document.getElementById('endScreenLost').classList.remove('d-none');
    }

    /**
     * checks if the character is dead and reached the last image position
     * @returns boolean - returns false when character is dead
     */
    checkCharacterDead() {
        if (this.character.endReached) {
            return false;
        } else {
            return true
        }
    }

    /**
     * checks if the boss is dead and reached the last image position
     * @returns boolean - returns false when boss is dead
     */
    checkBossDead() {
        if (this.endBoss.endReached) {
            return false;
        } else {
            return true
        }
    }

    /**
     * main function to draw objects by doing calling specialized functions
     */
    drawObjects() {
        this.drawBackgroundObjects();
        this.drawClouds();
        this.drawEnemies();
        this.drawEndBoss();
        this.drawCoins();
        this.drawCharacter();
        this.drawStatusBars();
        this.drawBottle();
        this.drawpickableBottles();
    }

    /**
     * function to draw the backgrounds
     */
    drawBackgroundObjects() {
        this.backgroundObjects.forEach(backgroundObject => {
            this.ctx.drawImage(backgroundObject.img, backgroundObject.x, 0, this.canvas.width, this.canvas.height);
        });
    }

    /**
     * function to draw clouds
     */
    drawClouds() {
        this.cloudObjects.forEach(cloud => {
            cloud.moveCloudLeft(this.canvas.width, this.speedBgLayerFour);
            this.ctx.drawImage(cloud.img, cloud.x, 0, this.canvas.width, this.canvas.height);
        });
    }

    /**
     * function to draw enemies
     */
    drawEnemies() {
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
    }

    /**
     * function to draw pickable coins
     */
    drawCoins() {
        this.coins.forEach(coin => {
            this.ctx.drawImage(coin.img, coin.x, coin.y, coin.width, coin.height);
        });
        this.coins.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
    }

    /**
     * function to draw pickable bottles
     */
    drawpickableBottles() {
        this.pickableBottles.forEach(pickablebottle => {
            this.ctx.drawImage(pickablebottle.img, pickablebottle.x, pickablebottle.y, pickablebottle.width, pickablebottle.height);
        });
        this.pickableBottles.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
    }

    /**
     * function to draw the character 
     * rotates the picture depending on which direction you are walking
     */
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

    /**
     * function to draw the endboss
     */
    drawEndBoss() {
        this.ctx.drawImage(this.endBoss.img, this.endBoss.x, this.endBoss.y, this.endBoss.width, this.endBoss.height);
    }

    /**
     * function to draw the status bars
     */
    drawStatusBars() {
        this.statusBar.forEach(element => {
            element.setImg(this.character.energy, this.character.bottles, this.character.coins, this.endBoss.energy);
            this.ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        });
    }

    /**
     * function to draw the bottles
     * if a bottle is picked, its energy is zero. then the bottle will be deleted
     */
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

    /**
     * function to get the canvas height
     * @returns number
     */
    getHeight() {
        return this.canvas.height;
    }

    /**
     * function to get the canvas width
     * @returns number
     */
    getWidth() {
        return this.canvas.width;
    }

    /**
     * returns the max speed of the game
     * @returns number
     */
    getMaxSpeed() {
        return this.maxSpeed;
    }

    /**
     * main function for collisions. 
     * calls single specific functions 
     */
    checkColissions() {
        this.checkEnemiesSmashed();
        this.checkEnemiesHigher();
        this.checkEnemiesColiding();
        this.checkBottles();
        this.checkCoins();
        this.checkPickableObjects();
    }

    /**
     * checks if the enemy is smashed by player
     * in this case the enemies energy is set to zero
     * and dead images will be set
     */
    checkEnemiesSmashed() {
        this.enemies.forEach((enemy) => {
            if (this.character.isSmashed(enemy) && enemy.energy > 0) {
                this.character.jumpSmash = true;
                enemy.energy = 0;
                enemy.setDeadImgs();
            };
        });
    }

    /**
     * if the character if jumping and above an enemie,
     * the variable isHigher will set to true
     */
    checkEnemiesHigher() {
        this.enemies.forEach((enemy) => {
            if (this.character.checkHigher(enemy)) {
                enemy.isHigher = true;
            } else {
                enemy.isHigher = false;
            };
        });
    }

    /**
     * checks if the character is collided with an enemy
     */
    checkEnemiesColiding() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
            };
        });
    }

    /**
     * checks if a throwed bottle hited the boss
     */
    checkBottles() {
        this.bottles.forEach((bottle) => {
            if (this.endBoss.isColliding(bottle)) {
                if (!bottle.hasHitted()) {
                    this.endBoss.hit();
                }
                bottle.collides();
            };
        });
    }

    /**
     * checks if the character collides with a coin
     * if true, sets energy of coin to zero and adds a coin to character
     */
    checkCoins() {
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                sounds.playCoin();
                coin.energy = 0;
                this.character.addCoin();
            }
        });
    }

    /**
     * checks if the character collides with a pickable bottle
     * if true, sets energy of pickable bottle to zero and adds a pickable bottle to character
     */
    checkPickableObjects() {
        this.pickableBottles.forEach((pickableBottle) => {
            if (this.character.isColliding(pickableBottle)) {
                sounds.playBottlePick();
                pickableBottle.energy = 0;
                this.character.addBottle();
            }
        });
    }

    /**
     * function to move the background if character is walking and alive
     */
    checkBgMove() {
        setInterval(() => {
            this.setAdditionalSpeedZero();
            if (!this.character.isDead()) {
                if (!this.character.checkBothDirectionKeysPressed()) {
                    if (this.character.rightEnd && keyboard.getPressedKey('right')) {
                        this.moveCanvasRight();
                    }
                    if (this.character.leftEnd && keyboard.getPressedKey('left')) {
                        this.moveCanvasLeft();
                    }
                }
            }
        }, 1000 / 60);
    }

    /**
     * sets the additional speed of bottles and enemies to zero
     */
    setAdditionalSpeedZero() {
        this.enemies.forEach(enemy => {
            enemy.setAdditionalSpeed(0);
        });
        this.bottles.forEach(bottle => {
            bottle.setAdditionalSpeed(0);
        });
    }

    /**
     * when character is walking to right, lets move the background to left
     */
    moveCanvasLeft() {
        this.endBoss.moveRight();
        this.enemies.forEach(enemy => {
            enemy.setAdditionalSpeed(this.maxSpeed * -1);
        });
        this.backgroundObjects.forEach(object => {
            object.moveBgLeft(this.canvas.width, this.maxSpeed);
        });
        this.bottles.forEach(bottle => {
            bottle.setAdditionalSpeed(this.maxSpeed);
        });
        this.coins.forEach(coin => {
            coin.moveLeft(this.maxSpeed);
        });
        this.pickableBottles.forEach(pickableBottle => {
            pickableBottle.moveLeft(this.maxSpeed);
        });
    }

    /**
     * when character is walking to left, lets move the background to right
     */
    moveCanvasRight() {
        this.endBoss.moveLeft();
        this.bottles.forEach(bottle => {
            bottle.setAdditionalSpeed(this.maxSpeed * -1);
        });
        this.enemies.forEach(enemy => {
            enemy.setAdditionalSpeed(this.maxSpeed);
        });
        this.backgroundObjects.forEach(object => {
            object.moveBgRight(this.canvas.width, this.maxSpeed);
        });
        this.coins.forEach(coin => {
            coin.moveRight(this.maxSpeed);
        });
        this.pickableBottles.forEach(pickableBottle => {
            pickableBottle.moveRight(this.maxSpeed);
        });
    }

    /**
     * on pressing button d the character will throw a bottle, if he has enough bottles
     * this function generates a bottle on position of the character
     */
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