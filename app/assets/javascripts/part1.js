var RpgGame = RpgGame || {};

RpgGame.BattleState = function(){
  "use strict";
  Phaser.State.call(this);
}

RpgGame.BattleState.prototype = Object.create(Phaser.State.prototype);
RpgGame.BattleState.prototype.constructor = RpgGame.BattleState;

RpgGame.BattleState.prototype.init = function(level_data){
  "use strict";

  this.level_data = level_data;
  
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
}

RpgGame.BattleState.prototype.create = function(){
  
}