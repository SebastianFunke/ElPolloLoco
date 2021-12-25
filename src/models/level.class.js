class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;

    constructor(backgroundObjects, clouds, enemies, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
}