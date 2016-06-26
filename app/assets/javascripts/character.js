
function Character(game,name,characterClass,hp,attack,movement,player){
  var x = game.world.randomX;
  var y = game.world.randomY;
  var cursors = movement;

  this.game = game;
  this.name = name;
  this.class = characterClass;
  this.hp = hp;
  this.attack = attack;
  this.isDefending = false;
  this.player = game.add.sprite(x,y,'dude');

  game.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.body.immovable = true;
  this.player.body.collideWorldBounds = true;
  this.player.body.setSize(20,32,5,16);

  this.attackCharacter = function(enemy){
    enemy.hp = enemy.hp - this.attack;
    console.log(enemy.hp);
  };

  this.defend = function(){
    this.isDefending = true;
  }

  this.moveCharacter = function(){
    this.player.body.velocity.x = 0
    this.player.body.velocity.y = 0

    if(cursors.left.isDown){
      this.player.body.velocity.x = -200;

      this.player.animations.play('left');
    }
    else if(cursors.right.isDown){
      this.player.body.velocity.x = 200;

      this.player.animations.play('right');
    }
    else{
      this.player.animations.stop();
    }

    if(cursors.up.isDown){
      this.player.body.velocity.y = -200
    }
    else if(cursors.down.isDown){
      this.player.body.velocity.y = 200
    }
  }

}
