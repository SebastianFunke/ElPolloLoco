class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    character;
    boss;

    constructor(backgroundObjects, clouds, enemies, coins, bottles, character, boss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.character = character;
        this.boss = boss;
    }
}