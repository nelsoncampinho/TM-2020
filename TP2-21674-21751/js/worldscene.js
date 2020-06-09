class WorldScene extends Phaser.Scene {

    constructor() {
        super({key: 'WorldScene'});
    }


    preload() {
    }


    create() {

        var linha;
        var linha_barra_direita;
        var linha_barra_esquerda;
        var linha2;
        var balizas;
        var iceblock;
        var flash;

        this.aceleration1 = 400;
        this.aceleration2 = 400;
        this.percentage = 100;



        //imagem de fundo
        this.add.image(770, 370, 'relvado');


        //instruções para o audio
        this.audioOnOff = true;
        this.golo = this.sound.add('golo');


        //criação das linhas
        linha_barra_esquerda  = this.physics.add.staticGroup();
        linha_barra_direita  = this.physics.add.staticGroup();
        linha = this.physics.add.staticGroup();

        linha.create(770, 700, 'linha').setScale(2.1).refreshBody();
        linha_barra_esquerda.create(65, 500, 'linha').setScale(0.20).refreshBody();
        linha_barra_direita.create(1470, 500, 'linha').setScale(0.20).refreshBody();

        //criação poderes
        flash = this.physics.add.sprite(Phaser.Math.Between(100, 1500), 370, 'flash').setScale(0.07);
        flash.setCollideWorldBounds(true);

        iceblock = this.physics.add.sprite(Phaser.Math.Between(100, 1500), 370, 'iceblock').setScale(0.08);
        iceblock.setCollideWorldBounds(true);


        //inicialização das pontuações a 0
        this.pontuacaoRed = 0;
        this.pontuacaoBlue = 0;

        //criação do player1
        this.player1 = this.physics.add.sprite(50, 500, 'player1').setScale(0.4);
        this.player1.setBounce(0.2);
        this.player1.setCollideWorldBounds(true);
        this.player1.body.setGravityY(300);

        //criação do player2
        this.player2 = this.physics.add.sprite(1540, 500, 'player2').setScale(0.4);
        this.player2.setBounce(0.2);
        this.player2.setCollideWorldBounds(true);
        this.player2.body.setGravityY(300);

        //criação da bola
        this.bola = this.physics.add.sprite(770, 370, 'bola').setScale(0.1);
        this.bola.setCollideWorldBounds(true);

        //criação das colisões
        this.physics.add.collider(linha_barra_direita, this.bola);
        this.physics.add.collider(linha_barra_esquerda, this.bola);
        this.physics.add.collider(linha, this.player1);
        this.physics.add.collider(linha, this.player2);
        this.physics.add.collider(this.player1, this.bola);
        this.physics.add.collider(this.player2, this.bola);
        this.physics.add.collider(this.bola, this.player1);
        this.physics.add.collider(this.bola, this.player2);
        this.physics.add.collider(linha, this.bola);
        this.physics.add.collider(this.player1, this.player2);
        this.physics.add.collider(linha, iceblock);
        this.physics.add.collider(linha, flash);


        this.physics.add.overlap(this.player1, iceblock, this.freezePower, null, this); //verifica se colidiu
        this.physics.add.overlap(this.player2, iceblock, this.freezePower, null, this); //verifica se colidiu

        this.physics.add.overlap(this.player1, flash, this.flashPower, null, this); //verifica se colidiu
        this.physics.add.overlap(this.player2, flash, this.flashPower, null, this); //verifica se colidiu

        //instruções para a velocidade da bola
        this.bola.body.velocity.setTo(0, 0);

        this.bola.body.bounce.setTo(1, 1);


        //texto para pontuação do Red
        this.scoreText = this.add.text(50, 50, "Equipa Vermelha: ", {fontSize: '32px', fill: '#000'});

        //texto para pontuação do Red
        this.vs = this.add.text(740, 50, "VS", {fontSize: '32px', fill: '#000'});

        //texto para a pontuação do Blue
        this.scoreText2 = this.add.text(1250, 50, " :Equipa Azul", {fontSize: '32px', fill: '#000'});

        //inicialização de cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        //implementação das teclas A,D,W
        this.keyA = this.input.keyboard.addKey('A');
        this.keyD = this.input.keyboard.addKey('D');
        this.keyW = this.input.keyboard.addKey('W');

    }


    update() {

        //velocidade do player1 de acordo com as teclas
        if (this.keyA.isDown) {
            this.player1.body.velocity.x = -this.aceleration1;
        } else if (this.keyD.isDown) {
            this.player1.body.velocity.x = this.aceleration1;
        } else {
            this.player1.body.velocity.x = 0;
        }
        if (this.keyW.isDown && this.player1.body.touching.down) {
            this.player1.body.velocity.y = -470;
        }

        //velocidade do player2 de acordo com as teclas
        if (this.cursors.left.isDown) {
            this.player2.body.velocity.x = -this.aceleration2;
        } else if (this.cursors.right.isDown) {
            this.player2.body.velocity.x = this.aceleration2;
        } else {
            this.player2.body.velocity.x = 0;
        }
        if (this.cursors.up.isDown && this.player2.body.touching.down) {
            this.player2.body.velocity.y = -470;
        }


        //verificação de "golo" do playerRed
        //ativa o som de golo
        //aumenta a pontuação
        //players voltam às posições iniciais tal como a bola
        if (this.bola.x > 1508 && this.bola.y > 500 && this.bola.y < 740) {
            // this.golo.play();
            this.cor = "red";
            this.pontuacaoRed = this.pontuacaoRed + 1;
            this.scoreText.setText("Equipa Vermelha: ");
            this.goloBaliza(this.pontuacaoRed, this.cor);
            this.resetPositions();
            if (this.pontuacaoRed == 5) {
                this.scene.start('GameOver', {pontuacaoRed: this.pontuacaoRed});
            }
        }

        //verificação de "golo" do playerBlue
        //ativa o som de golo
        //aumenta a pontuação
        //players voltam às posições iniciais tal como a bola
        if (this.bola.x < 30 && this.bola.y > 500 && this.bola.y < 740) {
            // this.golo.play();
            this.cor = "blue";
            this.pontuacaoBlue = this.pontuacaoBlue + 1;
            this.scoreText2.setText(":Equipa Azul ");
            this.goloBaliza(this.pontuacaoBlue, this.cor);
            this.resetPositions();
            if (this.pontuacaoBlue == 5) {
                this.scene.start('GameOver', {pontuacaoBlue: this.pontuacaoBlue});
            }
        }

    }

    resetPositions() {
        this.bola.x = 770;
        this.bola.y = 300;
        this.player1.x = 50;
        this.player1.y = 500;
        this.player2.x = 1490;
        this.player2.y = 500;
        this.bola.body.velocity.setTo(0, 0);
        this.player2.body.enable = true;
        this.player1.body.enable = true;
    }

    goloBaliza(pont, cor) {
        this.eixoy = 50;
        if (cor == "red") {

            if (pont == 1) {
                this.eixox = 400;
            }
            if (pont == 2) {
                this.eixox = 450;
            }
            if (pont == 3) {
                this.eixox = 500;
            }
            if (pont == 4) {
                this.eixox = 550;
            }
            if (pont == 5) {
                this.eixox = 600;
            }
        }
        if (cor == "blue") {

            if (pont == 1) {
                this.eixox = 1200;
            }
            if (pont == 2) {
                this.eixox = 1150;
            }
            if (pont == 3) {
                this.eixox = 1100;
            }
            if (pont == 4) {
                this.eixox = 1050;
            }
            if (pont == 5) {
                this.eixox = 1000;
            }
        }
        this.add.image(this.eixox, this.eixoy, 'bola').setScale(0.1);

    }

    flashPower(player, flash) //quando colide desaparece e dá poder
    {
        flash.disableBody(true, true);
        if (player == this.player1) {
            var i = 1;
            this.aceleration1 = 800;
            let magicBarAzul=this.makeBar(50,100,0xe74c3c);
            this.setValue(magicBarAzul,this.percentage);
            this.time.addEvent({
                delay: 300,
                callback: () => {

                    this.percentage =  this.percentage - 10;
                    this.setValue(magicBarAzul, this.percentage);
                    if(i==10){
                        this.aceleration1 = 400;
                        this.percentage = 100;
                    }
                    i++;
                },
                callbackScope: this,
                repeat: 9
            });

        } else if (player == this.player2) {
            var i = 1;
            this.aceleration2 = 800;
            let magicBarVermelho=this.makeBar(1300,100,0x2980b9);
            this.setValue(magicBarVermelho,this.percentage);
            this.time.addEvent({
                delay: 300,
                callback: () => {

                    this.percentage =  this.percentage - 10;
                    this.setValue(magicBarVermelho, this.percentage);
                    if(i==10){
                        this.aceleration2 = 400;
                        this.percentage = 100;
                    }
                    i++;
                },
                callbackScope: this,
                repeat: 9
            });

        }

    }

    freezePower(player, iceblock) //quando colide desaparece e dá poder
    {

        iceblock.disableBody(true, true);
        if (player == this.player1) {
            var i = 1;
            this.player2.body.enable = false;
            let magicBarAzul= this.makeBar(50,100,0xe74c3c);
            this.time.addEvent({
                delay: 300,
                callback: () => {
                    this.percentage =  this.percentage - 10;
                    this.setValue(magicBarAzul, this.percentage);
                    if(i==10){
                        this.percentage = 100;
                        this.player2.body.enable = true;
                    }
                    i++;
                    console.log(i);
                },
                callbackScope: this,
                repeat: 9
            });




        } else if (player == this.player2) {
            this.player1.body.enable = false;
            let magicBarVermelho=this.makeBar(1300,100,0x2980b9);
            var i = 1;
            this.time.addEvent({
                delay: 300,
                callback: () => {
                    this.setValue(magicBarVermelho,this.percentage);
                    this.percentage =  this.percentage - 10;
                    if(i==10){
                        this.percentage = 100;
                        this.player1.body.enable = true;
                    }
                    i++;
                },
                callbackScope: this,
                repeat: 9
            });



        }
    }


    makeBar(x, y,color) {
        //draw the bar
        let bar = this.add.graphics();

        //color the bar
        bar.fillStyle(color, 1);

        //fill the bar with a rectangle
        bar.fillRect(0, 0, 200, 50);

        //position the bar
        bar.x = x;
        bar.y = y;

        //return the bar
        return bar;
    }
    setValue(bar,percentage) {
        //scale the bar
        bar.scaleX = percentage/100;
    }



}