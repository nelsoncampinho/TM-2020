var config = {
    type: Phaser.AUTO,
    width: 1540,
    height: 735,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:500 },
            debug: false
        }
    },
    scene: [
        BootScene,
        MenuScene,
        WorldScene,
        GameOver
    ]
};


// -- criação da variável do jogo "game"
var game = new Phaser.Game(config);
