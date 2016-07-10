var RpgGame = RpgGame || {};

RpgGame.Menu = function(game_state, name, position, properties){
  "use strict";
  Phaser.State.call(this, game_state, name, position, properties);

  this.visible = false;

  this.menu_items = properties.menu_items;

  this.current_item_index = 0;
}

RpgGame.Menu.prototype = Object.create(Phaser.State.prototype);
RpgGame.Menu.prototype.constructor = RpgGame.Menu;

RpgGame.Menu.prototype.process_input = function(event){
  switch(event.keyCode){
    case Phaser.Keyboard.DOWN: break;

    case Phaser.Keyboard.UP: break;

    case Phaser.Keyboard.X: break;

    case Phaser.Keyboard.Z: break;
  }
}

RpgGame.Menu.prototype.enable = function(){
  "use strict";

  this.current_item_index = 0;

  if(this.menu_items.length > 0){
    this.menu_items[this.current_item_index].selection_over();
  }
}

RpgGame.Menu.prototype.disable = function(){

}