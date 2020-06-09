class BootScene extends Phaser.Scene {
    
    constructor() {
        super( { key: 'BootScene'} );
    }

    //carrega a imagem e o áudio que irá ser utilizado
    preload ()
    {
        this.load.image('relvado', 'assets/relvado.png');
        this.load.image('relvadoIni', 'assets/relvadoIni.png');
        this.load.image('player2', 'assets/pa.png');
        this.load.image('bola', 'assets/ball.png');
        this.load.image('player1', 'assets/pv1.png');
        this.load.image('linha', 'assets/linha.png');
        this.load.image('l', 'assets/lb.png');
        this.load.image('iceblock', 'assets/iceblock.png');
        this.load.image('flash', 'assets/flash.png');
        this.load.audio('golo', [ 'assets/audio/golo.mp3','assets/audio/golo.m4a','assets/audio/golo.ogg']);


    }

    create() {
        // -- inicia uma nova Scene
        this.scene.start('MenuScene');
    }
    
}