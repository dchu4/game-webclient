var charObj;
var itemObj;
var gameItems = [];
var charsArray = [];
var enemysArray = [];

var bootState = {
  preload: function(){

    fetch('http://localhost:3000/characters.json')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        for(var i = 0; i < data.length; i++){
          charObj = {
            name: data[i].character_name,
            charClass: data[i].character_class,
            charHp: 300,
            charAttack: data[i].attack,
            alive: true,
            set: data[i].enemy_set
          }

          if(data[i].isNpc){
            enemysArray.push(charObj);
          }
          else{
            charsArray.push(charObj);
          }

        };   

        game.cache.charactersArray = charsArray;
        game.cache.enemysArray = enemysArray;
    });



    fetch('http://localhost:3000/items.json')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        for(var i = 0; i < data.length; i++){
          itemObj = {
            itemType: data[i].itemType,
            itemName: data[i].itemName,
            cureStatus: data[i].cureStatus,
            attack: data[i].attack,
            defense: data[i].defense,
            magicDefense: data[i].magicDefense,
            magicAttack: data[i].magicAttack,
            recoveryAmount: data[i].recoveryAmount,
            isEquipped: data[i].isEquipped,
            quantity: data[i].quantity,
            itemId: data[i].id
          }

          gameItems.push(itemObj);
        };   

        game.cache.gameItems = gameItems;

    });      
        game.state.start('worldMap');
  }
}