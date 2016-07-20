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
            charHp: data[i].hp,
            charAttack: data[i].attack,
            alive: data[i].alive,
            set: data[i].enemy_set,
            isNpc: data[i].is_npc,
            act: function(){
              if(this.isNpc == false){
                attackButton.visible = true;
                //console.log(attackButton.visible);
              }
              if(this.isNpc == true){
                attackButton.visble = false;

                arrayLength = userParty.length;

                console.log("This is the length: " + arrayLength);

                var charIndex = Math.floor(Math.random() * arrayLength);

                userParty[charIndex].charHp = userParty[charIndex].charHp - current_unit.charAttack;

                if(userParty[charIndex].charHp < 1){
                  userParty[charIndex].alive = false;
                  userParty[charIndex].charHp = 0;
                  console.log("IT attacks " + userParty[charIndex].name);
                  charText[charIndex].setText(userParty[charIndex].name + "\n" + "HP: " + userParty[charIndex].charHp);
                  deadChars.push(userParty.splice(charIndex,1));
                  deadCharText.push(charText.splice(charIndex,1));
                  return;
                }

                console.log("IT attacks " + userParty[charIndex].name);
                charText[charIndex].setText(userParty[charIndex].name + "\n" + "HP: " + userParty[charIndex].charHp);
                //next_turn();
              }
            }
          }

          if(data[i].is_npc){
            enemysArray.push(charObj);
          }
          else{
            charsArray.push(charObj);
          }

        };   

        game.cache.charactersArray = charsArray;
        game.cache.enemysArray = enemysArray;


      fetch('http://localhost:3000/items.json')
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          for(var i = 0; i < data.length; i++){
            itemObj = {
              itemType: data[i].item_type,
              itemName: data[i].name,
              cureStatus: data[i].cure_status,
              attack: data[i].attack,
              defense: data[i].defense,
              magicDefense: data[i].magic_defense,
              magicAttack: data[i].magic_attack,
              recoveryAmount: data[i].recovery_amount,
              itemId: data[i].id
            }

            gameItems.push(itemObj);
          };   

          game.cache.gameItems = gameItems;

          game.state.start('worldMap');
      });      
          
    });



  }
}