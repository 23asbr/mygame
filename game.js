

class Main extends Phaser.Scene {

    // This function essentially loads things into our game
    preload() {
        
    }

    //  it runs once at the beginning of the game and
    //  allows the user to place the things that they’ve preloaded with preload() and
    //  create objects within our game such as animations, collision detectors, text, groups, and much more
    create() {
        
    }

    // While preload() and create() run only once at the start of the game, update() runs constantly.
    update() {
        
    }
}
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 490,
    scene: Main, // Цю сцену ми створимо на 4-му кроці
    backgroundColor: '#71c5cf',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    }
};

const game = new Phaser.Game(config);