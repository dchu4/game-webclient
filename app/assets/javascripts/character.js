
function Character(xPos,yPos,game,name,characterClass,hp,attack){
  var x = game.world.randomX;
  var y = game.world.randomY;

  this.charName = name;
  this.charHp = hp;
  this.charAttack = attack;
  this.player = game.add.sprite(xPos,yPos,'char',3);

  game.physics.enable(this.player, Phaser.Physics.ARCADE);
  this.player.enableBody = true;
  this.player.body.immovable = false;
  this.player.body.collideWorldBounds = true;
  this.player.body.setSize(30,30);

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
