class Sounds {
    mute = true;
    walking = new Audio('src/sounds/walking.mp3');
    bottleSmash = new Audio('src/sounds/bottle_smash.mp3');
    enemySmash = new Audio('src/sounds/enemy_smash.mp3');
    jumpUp = new Audio('src/sounds/jump_up.mp3');
    landing = new Audio('src/sounds/landing.mp3');
    coin = new Audio('src/sounds/coin.mp3');
    bottlePick = new Audio('src/sounds/bottle_pick.mp3');
    characterHurt = new Audio('src/sounds/player_hurt.mp3');
    characterSleep = new Audio('src/sounds/sleep.mp3');
    bossHit = new Audio('src/sounds/boss_hit.mp3');
    bossDead = new Audio('src/sounds/boss_dead.mp3');
    constructor() {

    }

    /**
     * checks whether the player has muted the game
     * @returns boolean
     */
    checkMute() {
        return this.mute;
    }

    /**
     * if game is not muted this function start playing the sound
     * @param {audio} sound to play
     */
    play(sound) {
        if (!this.checkMute()) {
            sound.play();
        }
    }

    pause() {
        this.characterSleep.pause();
        this.walking.pause();
    }

    playWalking() {
        this.play(this.walking);
    }

    playSleep() {
        this.play(this.characterSleep);
    }

    playCharacterHurt() {
        this.play(this.characterHurt);
    }

    playBossDead() {
        this.play(this.bossDead);
    }

    playBottleSmash() {
        this.play(this.bottleSmash);
    }

    playBossHit() {
        this.bossHit.pause();
        this.bossHit.currentTime = 0;
        this.play(this.bossHit);
    }

    playEnemySmash() {
        this.play(this.enemySmash);
    }

    playJumpUp() {
        this.play(this.jumpUp);
    }

    playLanding() {
        this.play(this.landing);
    }

    playCoin() {
        this.coin.pause();
        this.coin.currentTime = 0;
        this.play(this.coin);
    }

    playBottlePick() {
        this.play(this.bottlePick);
    }

    pauseBottleSmash() {
        this.bottleSmash.pause();
        this.bottleSmash.currentTime = 0;
    }

}