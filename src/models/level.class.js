class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;

    constructor(backgroundObjects, clouds, enemies, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}