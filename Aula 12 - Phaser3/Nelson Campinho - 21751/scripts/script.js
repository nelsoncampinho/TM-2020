var config = {
    type: Phaser.AUTO, //contexto de renderização
    width: 800, //resolução
    height: 600,
    physics: { //jogo necessita Arcade Physics system
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); //inicia processo de visualização do phaser

function preload () //Phaser corre função automaticamente no inicio do processo
{
    this.load.image('sky', 'assets/sky.png'); //sky - (id)link para este asset
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}





var platforms;
var score = 0;
var scoreText;


function create ()
{
    // this.add.image(400, 300, 'sky'); //400 300 pois o phaser centra automaticamente e assim conseguimos visualizar a imagem toda
    // //this.add.image(0, 0, 'sky').setOrigin(0, 0)
    // this.add.image(400, 300, 'star');

    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();//Arcade Physics system

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();//Chão REFRESHBODY pois é static

    platforms.create(600, 400, 'ground');//andar1
    platforms.create(50, 250, 'ground');//andar2
    platforms.create(750, 220, 'ground');//andar3

    cursors = this.input.keyboard.createCursorKeys();

    //PLAYER
    player = this.physics.add.sprite(100, 450, 'dude'); //dinámico
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);

    this.physics.add.collider(player, platforms);


    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 //LOOP
    });
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });



    //STARS
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11, //12 estrelas (11+1)
        setXY: { x: 12, y: 0, stepX: 70 } //70 pixeis a cada estrela
    });
    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); //pequeno salto
    });

    this.physics.add.collider(stars, platforms); //add collision

    this.physics.add.overlap(player, stars, collectStar,null, this); //verifica se colidiu

    scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px', fill: '#000' });


    //BOMBAS
    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);


}



function update ()
{
    if (cursors.left.isDown)//esquerda
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)//direita
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0); //parado
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down)//salto
    {
        player.setVelocityY(-470);
    }
}

function collectStar (player, star) //quando colide desaparece
{
    star.disableBody(true, true);

    score += 10; //Adiciona 10pontos
    scoreText.setText('Score: ' + score); //atualiza pontos

    if (stars.countActive(true) === 0) //countActive - estrelas restantes
    {
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : //lado aposto player
            Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');//criar bomba
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);//collider da bola
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);//salto da bola
    }

}

function hitBomb (player, bomb)
{
    this.physics.pause();//para o jogo
    player.setTint(0xff0000);//player vermelho
    player.anims.play('turn');//Animação de estar parado
    gameOver = true;//perdeu
}