class Sounds {
    mute = false;
    walking = new Audio('src/sounds/walking.mp3');
    bottleSmash = new Audio('src/sounds/bottle_smash.mp3');
    enemySmash = new Audio('src/sounds/enemy_smash.mp3');
    jumpUp = new Audio('src/sounds/jump_up.mp3');
    landing = new Audio('src/sounds/landing.mp3');
    coin = new Audio('src/sounds/coin.mp3');
    bottlePick = new Audio('src/sounds/bottle_pick.mp3');
    characterHurt = new Audio('src/sounds/player_hurt.mp3');
    characterSleep = new Audio('src/sounds/sleep.mp3');

    constructor() {

    }

    playWalking() {
        this.play(this.walking);
    }

    playSleep() {
        this.play(this.characterSleep);
    }

    pause() {
        this.characterSleep.pause();
        this.walking.pause();
    }

    playCharacterHurt() {
        this.play(this.characterHurt);
    }

    play(sound) {
        if (!this.checkMute()) {
            sound.play();
        }
    }

    playBottleSmash() {

        this.play(this.bottleSmash);
    }

    pauseBottleSmash() {
        this.bottleSmash.pause();
        this.bottleSmash.currentTime = 0;
    }

    pauseCoin() {
        this.coin.pause();
        this.coin.currentTime = 0;
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
        this.play(this.coin);
    }

    playBottlePick() {
        this.play(this.bottlePick);
    }


    checkMute() {
        return this.mute;
    }



}