class GameOver extends Phaser.Scene {
    
    constructor() {
        super( { key: 'GameOver'} );
    }
    
    //função para passar a pontuação obtida por cada jogador ao longo do jogo
    init(data){
        console.log('init', data);
        this.pontuacaoRed = data.pontuacaoRed;
        this.pontuacaoBlue = data.pontuacaoBlue;
    }


    create ()
    {

        //imagem de fundo 
        this.add.image(770, 370, 'relvadoIni');

        //se a pontuacaoRed for igual a 5 efetua as suas instruções
        if(this.pontuacaoRed == 5){
            this.add.text(480,100,"A equipa vermelha foi a vencedora!" ,{ fontSize: '30px', fill: '#ffff' });
            this.add.text(660,150,"Parabéns!" ,{ fontSize: '40px', fill: '#ffff' });
            this.add.image(770, 360, 'player1');
            this.add.text(500,530,"Para jogar novamente pressione espaço." ,{ fontSize: '25px', fill: '#ffff' });
        }

        //se a pontuacaoBlue for igual a 5 efetua as suas instruções
        if(this.pontuacaoBlue == 5){
            this.add.text(475,100,"A equipa azul foi a vencedora!" ,{ fontSize: '40px', fill: '#ffff' });
            this.add.text(660,150,"Parabéns!" ,{ fontSize: '40px', fill: '#ffff' });
            this.add.image(770, 360, 'player2');
            this.add.text(500,530,"Para jogar novamente pressione espaço." ,{ fontSize: '25px', fill: '#ffff' });
        }

        let cursors = this.cursors = this.input.keyboard.createCursorKeys(); 
    }

    update ()
    {
        //se carregar no espaço passa para o WorldScene
        this.keySpace = this.input.keyboard.addKey('space');
        if(this.keySpace.isDown){
            this.scene.start("WorldScene");
        }


    }
            
}


        
        
