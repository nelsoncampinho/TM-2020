class MenuScene extends Phaser.Scene {
    
    constructor() {
        super( { key: 'MenuScene'} );
    }
    


    create ()
    {
        //imagem de fundo
        this.add.image(770, 370, 'relvadoIni');

        //introduz o texto
        this.add.text(650,100,"Bem-vindo!" ,{ fontSize: '40px', fill: '#ffff' });
        this.add.text(450,175,"Jogo 1 vs 1" ,{ fontSize: '20px', fill: '#ffff' });
        this.add.text(450,205,"Equipa Vermelha vs Equipa Azul." ,{ fontSize: '20px', fill: '#ffff' });
        this.add.text(450,235,"O objetivo consiste em marcar 5 golos primeiro." ,{ fontSize: '20px', fill: '#ffff' });
        this.add.text(450,270,"Controlos Jogador Vermelho: 'a','w','d'." ,{ fontSize: '20px', fill: '#ffff' });
        this.add.text(450,305,"Controlos Jogador Azul: 'esquerda','cima','direita'." ,{ fontSize: '20px', fill: '#ffff' });
        this.add.image(600, 400, 'player1').setScale(0.4);
        this.add.text(750,400,"VS" ,{ fontSize: '20px', fill: '#ffff' });
        this.add.image(950, 400, 'player2').setScale(0.4);
        this.add.text(450,510,"Para iniciar o jogo prima a espaço!" ,{ fontSize: '25px', fill: '#ffff' });

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


        
        
